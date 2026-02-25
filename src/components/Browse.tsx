import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { GptPage } from "./GptPage";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // when the page is loaded make the api call to get the movies and update them in the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  type Category =
    | "upComingMovies"
    | "topRatedMovies"
    | "nowPlayingMovies"
    | "popularMovies";
  const list: Category[] = [
    "upComingMovies",
    "topRatedMovies",
    "nowPlayingMovies",
    "popularMovies",
  ];
  const headinMap: Record<Category, string> = {
    upComingMovies: "UP COMING",
    topRatedMovies: "TOP RATED",
    nowPlayingMovies: "NOW PLAYING",
    popularMovies: "POPULAR",
  };
  const isGptPageActive = useSelector(
    (store: any) => store?.netflixGpt?.showNetflixGptPage,
  );

  return (
    <div className="h-screen flex flex-col">
      <Header />
      {isGptPageActive ? (
        <GptPage />
      ) : (
        <div className="flex flex-1 flex-col overflow-y-auto bg-black">
          <MainContainer />
          {/* lists div */}
          <div className="w-full bg-[#141414]">
            {list.map((item) => (
              <div className="ml-16 gap-3 flex flex-col py-2">
                <h1 className="font-bold text-xl text-white">
                  {headinMap[item]}
                </h1>
                <SecondaryContainer type={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
