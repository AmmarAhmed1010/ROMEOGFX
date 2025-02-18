import React from "react";
import Image from "next/image";

const images = Array.from(
  { length: 35 },
  (_, i) => `/logo/logo (${i + 1}).jpg`
);

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Logo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-40">
            <Image
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={500} // 👈 Adjust width dynamically
              height={300} // 👈 Adjust height dynamically
              objectFit="contain" // 👈 Ensures the full image is visible
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
