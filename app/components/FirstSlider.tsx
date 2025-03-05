"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const firstSliderImages = [
  "/slider/slider (1).jpg",
  "/slider/slider (2).jpg",
  "/slider/slider (3).jpg",
  "/slider/slider (4).jpg",
  "/slider/slider (5).jpg",
  "/slider/slider (6).jpg",
  "/slider/slider (7).jpg",
  "/slider/slider (8).jpg",
];

const FirstSlider = () => {
  return (
  <>
  
    <div className="w-full overflow-hidden relative">
    <h1
    id="featured"
    className="underline text-white decoration-[#30D6F3] text-3xl md:text-5xl mb-6 font-semibold mt-10"
  >
    Featured Thumbnail
  </h1>
      <motion.div
        className="flex"
        animate={{ x: ["0%", `-${100}%`] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...firstSliderImages, ...firstSliderImages].map((src, i) => (
          <div key={i} style={{ minWidth: "25%", padding: "8px" }}>
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              width={300}
              height={300}
              priority={i < 2}
              quality={80}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </>
  );
};

export default FirstSlider;
