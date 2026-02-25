import { InfoIcon, Play, PlayCircleIcon } from "lucide-react";
const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="bg-linear-to-r from-black absolute top-0 left-0 h-full">
      <div className="flex flex-col gap-4 text-white h-full justify-center ml-16">
        <span className="text-3xl font-bold">{original_title}</span>
        <span className="w-1/3">{overview}</span>
        <div className="flex gap-3">
          <button className="cursor-pointer  min-w-30 w-fit flex justify-center gap-2 items-center p-2 rounded-sm bg-white text-black font-bold">
            <Play color="#000000" />
            Play
          </button>
          <button className="cursor-pointer  min-w-30 w-fit flex justify-center gap-2 items-center px-5 py-2 rounded-sm bg-[#6D6D6EB3] opacity-80">
            <InfoIcon />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
