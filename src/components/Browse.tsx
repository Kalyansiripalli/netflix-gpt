import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import MovieList from "./MovieList";

const Browse = () => {
  // when the page is loaded make the api call to get the movies and update them in the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const list = [
    "upComingMovies",
    "topRatedMovies",
    "nowPlayingMovies",
    "popularMovies",
  ];
  const headinMap = {
    upComingMovies: "UP COMING",
    topRatedMovies: "TOP RATED",
    nowPlayingMovies: "NOW PLAYING",
    popularMovies: "POPULAR",
  };

  return (
    <div>
      <div className="flex h-screen flex-col bg-black">
        <Header />
        <div className="flex h-full w-full  overflow-hidden relative">
          <MainContainer />
        </div>
      </div>
      <div className=" h-full w-full bg-[#141414]">
        {list.map((item) => (
          <div className="ml-16 gap-3 flex flex-col py-2">
            <h1 className="font-bold text-xl text-white">{headinMap[item]}</h1>
            <MovieList type={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
