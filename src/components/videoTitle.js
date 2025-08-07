import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 m-28 absolute text-white w-4/12">
      <h1 className="text-5xl font-serif md:text-6xl font-extrabold drop-shadow-lg mb-4 w-2/4">
        {title}
      </h1>
      <p>{overview}</p>
      <div className="space-x-4 mt-6 flex">
        <button className="bg-white text-black px-6 py-1 text-lg font-bold rounded-sm flex hover:bg-opacity-80">
          <PlayIcon className="align-middle h-5 w-5 m-1" />
          <span>Play</span>
        </button>
        <button className="bg-gray-300 text-black px-2 py-1 text-lg font-bold rounded-sm bg-opacity-50 flex hover:bg-opacity-30">
        <InformationCircleIcon className="h-6 w-6 m-1"/>
        More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
