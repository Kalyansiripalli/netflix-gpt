import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  // get the video details and play the trailer in the iframe
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-full h-full">
      <VideoBackground movieId={id} />
      <VideoTitle original_title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
