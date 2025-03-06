"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Preloading videos for faster access
    const videoList = Array.from({ length: 8 }).map((_, index) => {
      const video = document.createElement("video");
      video.src = `/overlay/overlay (${index + 1}).mp4`;
      video.preload = "auto";
      return video;
    });
    setVideos(videoList);
  }, []);

  return (
    <div className="p-4">
      <div className="bg-black text-white py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Overlays</h1>
      </div>
      {/* Video Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
