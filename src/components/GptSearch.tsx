import { useRef, useState } from "react";
import openai from "../utils/openai";
import useSearchMovies from "../customHooks/useSearchMovies";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import {
  addGptMovieSuggestions,
  addGptMovieSuggestionsDetails,
  setLoading,
} from "../utils/netflixGptSlice";

const GptSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [movieNames, setMovieNames] = useState<string[]>([]);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.netflixGpt.loading);

  // hook must be called at top level; it will run whenever `movieNames` changes
  useSearchMovies(movieNames);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const prompt = inputRef.current?.value || "";
    inputRef.current!.value = "";

    // if nothing was entered, clear state but do not trigger loading
    if (!prompt.trim()) {
      setMovieNames([]);
      dispatch(addGptMovieSuggestions(null));
      dispatch(addGptMovieSuggestionsDetails(null));
      return;
    }

    // start loading and clear any previous suggestions/details
    dispatch(setLoading(true));
    dispatch(addGptMovieSuggestions(null));
    dispatch(addGptMovieSuggestionsDetails(null));
    setMovieNames([]);

    try {
      const response = await openai.responses.create({
        model: "gpt-3.5-turbo",
        instructions:
          "You are a movie recommendation expert. Based on the given specifications, generate relevant movie suggestions. Return only the movie names as a comma-separated array. Do not include explanations, numbering, quotes, brackets, or any additional text. Ensure correct spelling and formatting. If no movies match, return an empty array.",
        input: prompt,
      });
      console.log(response.output_text);

      // split the returned comma-separated string into an array, trimming each entry
      const names = response.output_text
        .split(",")
        .map((n: string) => n.trim());

      setMovieNames(names);

      // if there were no valid suggestions (all entries empty after trimming),
      // the hook would early-return and leave loading true, so clear it here
      if (names.length === 0 || names.every((s) => s === "")) {
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error("error calling openai", error);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col w-full h-fit">
      <form
        onSubmit={handleSubmit}
        className=" w-2/3 gap-2 items-center grid grid-cols-12 p-2 mx-auto"
      >
        <input
          type="text"
          ref={inputRef}
          className="col-span-10 bg-gray-900 text-white opacity-50 p-2 rounded-sm  border-2"
          placeholder="Ask Me"
          disabled={loading}
        />
        <div className="col-span-2 flex items-center">
          <input
            type="submit"
            value="Submit"
            className="bg-red-700 text-md font-bold text-white p-3 rounded-sm w-full cursor-pointer"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default GptSearch;
