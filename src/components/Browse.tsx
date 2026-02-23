import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  // when the page is loaded make the api call to get the movies and update them in the store
  useNowPlayingMovies();

  return (
    <div>
      <div className="flex h-screen flex-col bg-black">
        <Header />
        <div className="flex h-full w-full  overflow-hidden relative">
          <MainContainer />
        </div>
      </div>
      <div className="bg-amber-950 h-screen w-full">secondary</div>
    </div>
  );
};

export default Browse;
