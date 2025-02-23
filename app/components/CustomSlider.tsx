"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/thumbnail/thumbnail (1).jpg",
  "/thumbnail/thumbnail (2).jpg",
  "/thumbnail/thumbnail (3).jpg",
  "/thumbnail/thumbnail (4).jpg",
  "/thumbnail/thumbnail (5).jpg",
  "/thumbnail/thumbnail (6).jpg",
  "/thumbnail/thumbnail (7).jpg",
  "/thumbnail/thumbnail (8).jpg",
];

const DualSlider = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  return (
    <>
     

      <div className="w-full space-y-6 overflow-hidden">
      <h1
        id="featured"
        className="underline text-white decoration-[#30D6F3] text-3xl md:text-5xl mb-6 font-semibold mt-10"
      >
        Featured Thumbnail
      </h1>
        {/* First Slider (Left to Right) */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: ["0%", `-${100}%`] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}
              >
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

        {/* Second Slider (Right to Left) */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: [`-${100}%`, "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}
              >
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
      </div>
    </>
  );
};

export default DualSlider;
