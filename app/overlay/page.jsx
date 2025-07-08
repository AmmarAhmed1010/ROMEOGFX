"use client";
import React, { useEffect, useState } from "react";
import { useVideoPreloader } from "../hooks/useVideoPreloader";

const Page = () => {
  const [videos, setVideos] = useState([]);
  const { preloadedVideos, error } = useVideoPreloader(8, '/overlay');

  useEffect(() => {
    // Set up video sources
    const videoSources = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      src: `/overlay/overlay (${i + 1}).mp4`
    }));
    setVideos(videoSources);
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-black text-white py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Overlays</h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg shadow-lg"
              ref={(el) => {
                // If we have a preloaded video, use it
                if (el && preloadedVideos[video.id]) {
                  el.src = preloadedVideos[video.id].src;
                }
              }}
              onError={(e) => {
                console.error(`Failed to load video: ${video.src}`);
                e.target.parentNode.innerHTML = `Failed to load video ${video.id}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
