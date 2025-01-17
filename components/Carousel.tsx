"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importing framer-motion

const Carousel = () => {
  const slides = [
    { id: 1, image: "/thumbnail/thumbnail (1).jpg" },
    { id: 2, image: "/thumbnail/thumbnail (2).jpg" },
    { id: 3, image: "/thumbnail/thumbnail (3).jpg" },
    { id: 4, image: "/thumbnail/thumbnail (4).jpg" },
    { id: 5, image: "/thumbnail/thumbnail (5).jpg" },
    { id: 6, image: "/thumbnail/thumbnail (6).jpg" },
    { id: 7, image: "/thumbnail/thumbnail (7).jpg" },
    { id: 8, image: "/thumbnail/thumbnail (8).jpg" },
    { id: 9, image: "/thumbnail/thumbnail (9).jpg" },
    { id: 10, image: "/thumbnail/thumbnail (10).jpg" },
    { id: 11, image: "/thumbnail/thumbnail (11).jpg" },
    { id: 12, image: "/thumbnail/thumbnail (12).jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNextSlide, 1500); // Faster interval for faster transition
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl heading">Featured</h2>

      {/* Slides with framer-motion */}
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{
          type: "easeInOut", // Smooth ease-in and ease-out transition
          duration: 0.5, // Quick duration for the transition
        }}
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
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
