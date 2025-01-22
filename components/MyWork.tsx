"use client";

import React from "react";

const MyWork = () => {
  const thumbnails = [
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Thumbnail 1" },
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Thumbnail 2" },
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Thumbnail 3" },
    // Add more thumbnails as needed
  ];

  const logos = [
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Logo 1" },
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Logo 2" },
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Logo 3" },
    // Add more logos as needed
  ];

  const banners = [
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Banner 1" },
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Banner 2" },
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Banner 3" },
    // Add more banners as needed
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          My Work
        </h2>

        {/* Thumbnails Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-yellow-300 mb-4">
            Thumbnails
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {thumbnails.map((thumbnail, index) => (
              <div key={index} className="relative group">
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  className="w-full h-64 object-cover rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-xl">View More</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-yellow-300 mb-4">
            Logos
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="relative group">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-40 object-contain rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Banners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-yellow-300 mb-4">
            Banners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {banners.map((banner, index) => (
              <div key={index} className="relative group">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-64 object-cover rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
