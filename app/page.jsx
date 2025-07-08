"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVideoPreloader } from "./hooks/useVideoPreloader";

export default function Home() {
  const router = useRouter();
  
  // Start preloading videos when the home page loads
  const { startPreloading } = useVideoPreloader(8, '/overlay');
  
  useEffect(() => {
    // Start preloading videos in the background
    startPreloading();
  }, [startPreloading]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to ROMEO GFX</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Overlays', path: '/overlay', description: 'Browse our collection of overlays' },
              { title: 'Banners', path: '/banner', description: 'Check out our banner designs' },
              { title: 'Logos', path: '/logo', description: 'Explore our logo collection' },
              { title: 'Thumbnails', path: '/thumbnail', description: 'View our thumbnail designs' },
            ].map((item) => (
              <div 
                key={item.path}
                onClick={() => router.push(item.path)}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
