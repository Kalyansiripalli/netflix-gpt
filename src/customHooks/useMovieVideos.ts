import axios from "axios";
import { tmdbApiOptions } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieVideos } from "../utils/videosSlice";

export const useMovieVideos = ({ movieId }: { movieId: number }) => {
  const dispatch = useDispatch();

  const fetchMovieRealatedVideos = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        tmdbApiOptions,
      );

      dispatch(setMovieVideos({ movieId, data: result.data }));
    } catch (err) {
      console.error("Failed to fetch movie videos", err);
    }
  };

  useEffect(() => {
    if (movieId) fetchMovieRealatedVideos();
  }, [movieId]);
};
