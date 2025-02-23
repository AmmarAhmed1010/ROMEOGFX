import React from "react";
import Image from "next/image";

const images = Array.from({ length: 15 }, (_, i) => `/banner/banner (${i + 1}).jpg`);

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Banner</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <Image 
              src={src} 
              alt={`Banner ${index + 1}`} 
              layout="fill" // ✅ Makes the image fill its container
              objectFit="cover" // ✅ Ensures the image covers the area without distortion
              className="rounded-xl"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
