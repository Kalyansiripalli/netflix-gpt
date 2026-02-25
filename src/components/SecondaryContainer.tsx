import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

// share Category type from Browse to keep consistent; duplicate here if necessary
export type Category =
  | "upComingMovies"
  | "topRatedMovies"
  | "nowPlayingMovies"
  | "popularMovies";

const SecondaryContainer: React.FC<{ type: Category }> = ({ type }) => {
  // MovieList
  const moviesList = useSelector((state: any) => state.movies[type]);
  return <MovieList moviesList={moviesList} />;
};

export default SecondaryContainer;
