import React from "react";
import Image from "next/image";

const images = Array.from({ length: 38 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`);

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white py-6 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Thumbnails</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <Image 
            key={index}
            src={src} 
            priority
            alt={`Thumbnail ${index + 1}`} 
            width={500} // 👈 Adjust width dynamically
            height={500} // 👈 Adjust height dynamically
            objectFit="contain" // 👈 Ensures the full image is visible
            className="rounded-xl w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
