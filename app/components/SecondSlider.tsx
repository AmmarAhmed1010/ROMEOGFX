"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
    "/thumbnail/thumbnail (9).jpg",
    "/thumbnail/thumbnail (10).jpg",
    "/thumbnail/thumbnail (11).jpg",
    "/thumbnail/thumbnail (12).jpg",
    "/thumbnail/thumbnail (13).jpg",
    "/thumbnail/thumbnail (14).jpg",
    "/thumbnail/thumbnail (15).jpg",
    "/thumbnail/thumbnail (16).jpg",
    "/thumbnail/thumbnail (17).jpg",
    "/thumbnail/thumbnail (18).jpg",

];

const SecondSlider = () => {
  const duplicatedImages = [...images, ...images]; // Duplicate images for infinite effect

  return (
    <div className="overflow-hidden w-full bg-black py-5">
      <motion.div
        className="flex w-max gap-4"
        initial={{ x: "-50%" }} // Start from the rightmost position
        animate={{ x: "0%" }} // Move left until halfway, ensuring seamless transition
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

export default SecondSlider;
