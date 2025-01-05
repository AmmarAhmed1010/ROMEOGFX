import React from "react";

const FeaturedThumbnail: React.FC = () => {
  // Replace with actual high-quality image URLs
  const images = Array(6).fill("/img1.png");

  return (
    <div
      id="featured"
      className="text-[#EEAF48] my-10 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EFB048] font-serif italic mb-8">
        Featured Thumbnails
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="rounded-lg shadow-md w-full h-auto object-cover border-4 border-blue-500"
          />
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-8 px-6 py-3 bg-[#C11414] text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
        View More Thumbnails
      </button>
    </div>
  );
};

export default FeaturedThumbnail;
