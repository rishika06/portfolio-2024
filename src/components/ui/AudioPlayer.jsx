import React, { useRef, useState } from "react";
import { FaPlay, FaPauseCircle } from "react-icons/fa";
import waveImage from "../../assets/sound_motion_wave_18.jpg";
import Box from "./Box";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handleProgressClick = (event) => {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setPlaybackSpeed(1);
    setCurrentTime(0);
  };

  return (
    <Box className="my-8 w-[95%]">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnd}
      ></audio>
      {/* image */}
      <div className="flex items-center justify-center p-2 relative">
        <img
          src={waveImage}
          alt="wave image"
          className=" rounded-xl opacity-80"
        />
        <button className="text-pale-olive" onClick={togglePlayPause}>
          {isPlaying ? (
            <FaPauseCircle className="h-24 w-24 absolute inset-0 m-auto text-slate-300 cursor-pointer" />
          ) : (
            <FaPlay className="h-24 w-24 absolute inset-0 m-auto text-slate-300 cursor-pointer" />
          )}
        </button>
      </div>

      <div className="w-full mt-8 px-2">
        <div
          className="relative h-2 bg-white rounded cursor-pointer"
          onClick={(event) => handleProgressClick(event)}
        >
          <div
            className="absolute h-2 bg-teal-500 rounded"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between my-4 ">
          <div className="flex text-xs text-dark-green font-semibold gap-2">
            {[0.5, 1, 1.5].map((speed) => (
              <button
                key={speed}
                value={speed}
                onClick={(e) => handleSpeedChange(Number(e.target.value))}
                className={`rounded-full h-7 w-7 cursor-pointer ${
                  playbackSpeed === speed ? "bg-teal-400" : "bg-teal-200"
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          <div className="text-sm text-pale-olive">
            <span>{formatTime(currentTime)}</span> <span> / </span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AudioPlayer;
