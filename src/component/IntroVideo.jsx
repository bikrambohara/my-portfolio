import React from "react";
import video from "../assets/video.mp4";

const IntroVideo = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <video
        src={video}
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        className="w-[1400px] h-[600px] object-cover rounded-xl"
      />
    </div>
  );
};

export default IntroVideo;