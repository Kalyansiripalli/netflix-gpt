import { useSelector } from "react-redux";
import { loginPageBgImage } from "../utils/constants";
import GptSearch from "./GptSearch";
import MovieList from "./MovieList";
import { Loader2 } from "lucide-react";

export const GptPage = () => {
  const list = useSelector(
    (store: any) => store?.netflixGpt?.gptMovieSuggestions,
  );
  const moviesList = useSelector(
    (store: any) => store?.netflixGpt?.gptMovieSuggestionsDetails,
  );
  const loading = useSelector((store: any) => store?.netflixGpt?.loading);
  return (
    <div className="relative flex flex-col flex-1 w-full h-full">
      <img
        src={loginPageBgImage}
        alt="loginPageBgImage"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="bg-black opacity-70 z-1 absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col  overflow-hidden z-2">
        <div className="flex-1 min-h-0 overflow-y-auto ">
          <GptSearch />
          {loading && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
              <Loader2 className="h-12 w-12 text-white animate-spin" />
            </div>
          )}
          {list &&
            moviesList &&
            list?.map((item: string, index: number) => (
              <div className="ml-16 gap-3 flex flex-col py-2">
                <h1 className="font-bold text-xl text-white">{item}</h1>
                <MovieList moviesList={moviesList[index]} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
