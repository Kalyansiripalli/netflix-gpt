import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { imageUrl } from "../utils/constants";

interface Movie {
  poster_path?: string;
  [key: string]: any;
}

const MovieList: React.FC<{ moviesList?: Movie[] }> = ({ moviesList }) => {
  return (
    moviesList && (
      <div className="flex overflow-x-auto gap-3 hide-scrollbar ">
        {moviesList.map((movie: Movie) => {
          return (
            movie.poster_path && (
              <img
                src={imageUrl + movie.poster_path}
                alt="imageUrl"
                className="rounded-xl cursor-pointer "
              />
            )
          );
        })}
      </div>
    )
  );
};

export default MovieList;
