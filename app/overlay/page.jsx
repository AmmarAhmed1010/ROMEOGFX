"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [preloadedVideos, setPreloadedVideos] = useState({});

  useEffect(() => {
    const preloadVideo = (src) => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
        video.oncanplaythrough = () => resolve({ src, element: video });
        video.onerror = () => {
          console.error(`Failed to preload video: ${src}`);
          resolve({ src, error: true });
        };
      });
    };

    const preloadAllVideos = async () => {
      try {
        const videoSources = Array.from({ length: 8 }, (_, i) => ({
          id: i + 1,
          src: `/overlay/overlay (${i + 1}).mp4`
        }));
        
        setVideos(videoSources);
        
        // Start preloading videos in the background
        const preloadPromises = videoSources.map(video => 
          preloadVideo(video.src).then(result => ({ id: video.id, ...result }))
        );
        
        const results = await Promise.all(preloadPromises);
        const preloadedMap = {};
        results.forEach(result => {
          if (!result.error) {
            preloadedMap[result.id] = result.element;
          }
        });
        setPreloadedVideos(preloadedMap);
        
      } catch (err) {
        console.error("Error in video preloading:", err);
        setError("Failed to preload videos. Please check the console for more details.");
      }
    };
    
    preloadAllVideos();
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
