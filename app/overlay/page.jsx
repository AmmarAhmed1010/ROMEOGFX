"use client";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
       <div className="bg-black text-white py-6 px-4">
       <h1 className="text-3xl font-bold text-center mb-6">Overlays</h1>
       </div>
      {/* Video Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <video
            key={index}
            src={`/overlay/overlay (${index + 1}).mp4`} // Ensure correct file path
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
