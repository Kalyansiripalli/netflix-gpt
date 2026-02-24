import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { imageUrl } from "../utils/constants";

const MovieList = ({ type }) => {
  const currentListType = type;
  const movies = useSelector((state: any) => state.movies[currentListType]);
  console.log(movies);

  return (
    movies && (
      <div className="flex overflow-x-auto gap-3 hide-scrollbar ">
        {movies.map((movie) => {
          return (
            <img
              src={imageUrl + movie.poster_path}
              alt="imageUrl"
              className="rounded-xl cursor-pointer "
            />
          );
        })}
      </div>
    )
  );
};

export default MovieList;
