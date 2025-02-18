import React from "react";
import Image from "next/image";

const images = Array.from({ length: 66 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`);

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Thumbnails</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-40"> 
            <Image 
              src={src} 
              alt={`Thumbnail ${index + 1}`} 
              layout="fill" 
              objectFit="contain" // 👈 Ensures the full image is visible
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
