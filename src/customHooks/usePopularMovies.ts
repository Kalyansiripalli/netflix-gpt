import { useEffect } from "react";
import { tmdbApiOptions } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      tmdbApiOptions,
    );

    dispatch(addPopularMovies(response.data.results));
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
