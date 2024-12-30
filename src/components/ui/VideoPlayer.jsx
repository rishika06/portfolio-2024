import React, { useRef, useState } from "react";
import { FaPlay, FaPauseCircle } from "react-icons/fa";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto relative">
      <video
        ref={videoRef}
        className="w-full rounded-lg"
        src={src}
        controls={false} // Disable default controls
      />
      <div className=" w-full mt-4 space-x-4">
        {/* <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
        >
          {isPlaying ? "Pause" : "Play"}
        </button> */}

        <button className="text-pale-olive" onClick={togglePlayPause}>
          {isPlaying ? (
            <FaPauseCircle className="h-24 w-24 absolute inset-0 m-auto text-[#8A8593] cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300" />
          ) : (
            <FaPlay className="h-24 w-24 absolute inset-0 m-auto text-[#8A8593]  cursor-pointer" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
