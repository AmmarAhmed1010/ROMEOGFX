import React from 'react';

const FeaturedThumbnail: React.FC = () => {
  const images = Array(6).fill('/img1.png'); // Reuse img1.png for all six items

  return (
    <div id='featured' className="text-[#EEAF48] flex flex-col items-center justify-center min-h-screen p-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#A9BCC0] font-serif italic mb-8">
        Featured Thumbnails
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="aspect-square bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
        View More Thumbnails
      </button>
    </div>
  );
};

export default FeaturedThumbnail;
