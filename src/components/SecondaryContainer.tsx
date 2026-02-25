import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ({ type }) => {
  // MovieList
  const moviesList = useSelector((state: any) => state.movies[type]);
  return <MovieList moviesList={moviesList} />;
};

export default SecondaryContainer;
