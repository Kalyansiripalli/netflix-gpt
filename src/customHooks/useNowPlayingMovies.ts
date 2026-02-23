import { useEffect } from "react";
import { tmdbApiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      tmdbApiOptions,
    );

    dispatch(addNowPlayingMovies(response.data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useNowPlayingMovies;
