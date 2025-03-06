"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  "/slider/slider (1).jpg",
    "/slider/slider (2).jpg",
    "/slider/slider (3).jpg",
    "/slider/slider (4).jpg",
    "/slider/slider (5).jpg",
    "/slider/slider (6).jpg",
    "/slider/slider (7).jpg",
    "/slider/slider (8).jpg",
    "/slider/slider (9).jpg",
    "/slider/slider (10).jpg",
];

const InfiniteSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const duplicatedImages = [...images, ...images]; // Duplicate images to ensure seamless looping

  return (
    <div className="overflow-hidden w-full bg-black py-5">
      <motion.div
        ref={sliderRef}
        className="flex w-max gap-4"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="w-[300px] flex-shrink-0">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={300}
              height={150}
              className="rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
