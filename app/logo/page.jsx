import React from "react";
import Image from "next/image";

const images = Array.from({ length: 35 }, (_, i) => `/logo/logo (${i + 1}).jpg`);

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Logo</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-square flex items-center justify-center p-2 bg-gray-900 rounded-xl">
            <Image 
              src={src} 
              alt={`Logo ${index + 1}`} 
              layout="fill" 
              objectFit="contain"
              className="rounded-lg"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
