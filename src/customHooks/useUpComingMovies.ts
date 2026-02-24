import { useEffect } from "react";
import { tmdbApiOptions } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const fetchUpComingMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      tmdbApiOptions,
    );

    dispatch(addUpComingMovies(response.data.results));
  };
  useEffect(() => {
    fetchUpComingMovies();
  }, []);
};

export default useUpComingMovies;
