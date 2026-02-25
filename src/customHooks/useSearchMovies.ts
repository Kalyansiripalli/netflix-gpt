import { useEffect } from "react";
import { tmdbApiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  addGptMovieSuggestions,
  addGptMovieSuggestionsDetails,
  setLoading,
} from "../utils/netflixGptSlice";

const useSearchMovies = (moviesList: string[]) => {
  const dispatch = useDispatch();

  const fetchMovieDetails = async (movieName: string) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        ...tmdbApiOptions,
        params: {
          query: movieName,
          include_adult: false,
          language: "en-US",
          page: 1,
        },
      },
    );
    return response.data.results;
  };

  useEffect(() => {
    if (!moviesList || moviesList.length === 0) return;

    const load = async () => {
      try {
        dispatch(setLoading(true));
        const allDetails = await Promise.all(
          moviesList.map((name: string) => fetchMovieDetails(name)),
        );
        console.log("fetched search results", allDetails);
        dispatch(addGptMovieSuggestions(moviesList));
        dispatch(addGptMovieSuggestionsDetails(allDetails));
        dispatch(setLoading(false));
      } catch (err) {
        console.error("failed to fetch movie details", err);
        dispatch(setLoading(false));
      }
    };

    load();
  }, [moviesList]);
};

export default useSearchMovies;
