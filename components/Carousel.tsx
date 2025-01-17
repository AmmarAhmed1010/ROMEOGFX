"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/thumbnail/thumbnail (1).jpg",
    },
    {
      id: 2,
      image: "/thumbnail/thumbnail (2).jpg",
    },
    {
      id: 3,
      image: "/thumbnail/thumbnail (3).jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl heading">Featured</h2>

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 rounded-3xl flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full max-h-[500px] rounded-3xl object-contain"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
