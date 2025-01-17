"use client";
import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   "/thumbnail/thumbnail (1).jpg",
   

  ]; // Replace with your image paths

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 4}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/4 flex-shrink-0 h-[200px] sm:h-[250px] lg:h-[300px]"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
