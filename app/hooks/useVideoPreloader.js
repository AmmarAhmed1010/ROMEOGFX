import { useState, useEffect } from 'react';

export const useVideoPreloader = (videoCount, basePath = '/overlay') => {
  const [preloadedVideos, setPreloadedVideos] = useState({});
  const [isPreloading, setIsPreloading] = useState(false);
  const [error, setError] = useState(null);

  const preloadVideo = (src, id) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.oncanplaythrough = () => resolve({ id, src, element: video });
      video.onerror = () => {
        console.error(`Failed to preload video: ${src}`);
        resolve({ id, src, error: true });
      };
    });
  };

  const startPreloading = async () => {
    if (isPreloading) return;
    
    try {
      setIsPreloading(true);
      setError(null);
      
      const videoSources = Array.from({ length: videoCount }, (_, i) => ({
        id: i + 1,
        src: `${basePath}/overlay (${i + 1}).mp4`
      }));

      const preloadPromises = videoSources.map(video => 
        preloadVideo(video.src, video.id)
      );
      
      const results = await Promise.all(preloadPromises);
      const preloadedMap = {};
      
      results.forEach(result => {
        if (!result.error) {
          preloadedMap[result.id] = result.element;
        }
      });
      
      setPreloadedVideos(preloadedMap);
      return preloadedMap;
    } catch (err) {
      console.error("Error in video preloading:", err);
      setError("Failed to preload videos. Please check the console for more details.");
      return {};
    } finally {
      setIsPreloading(false);
    }
  };

  return { preloadedVideos, startPreloading, isPreloading, error };
};
