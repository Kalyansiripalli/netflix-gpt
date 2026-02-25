import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { imageUrl } from "../utils/constants";

const MovieList = ({ moviesList }) => {
  return (
    moviesList && (
      <div className="flex overflow-x-auto gap-3 hide-scrollbar ">
        {moviesList.map((movie) => {
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
