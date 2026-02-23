import { useMovieVideos } from "../customHooks/useMovieVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }: { movieId: number }) => {
  useMovieVideos({ movieId });

  const movieVideos = useSelector(
    (state: any) => state.videos?.byMovieId?.[movieId],
  );
  const results = movieVideos?.results ?? [];
  const trailer = results.find((r: any) => r.type === "Trailer") || results[0];

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
