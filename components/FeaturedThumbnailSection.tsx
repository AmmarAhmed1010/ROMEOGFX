"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturedThumbnailSection: React.FC = () => {
  const thumbnails = [
    {
      src: '/thumbnail/thumbnail (1).jpg',
      alt: 'Thumbnail 1',
    },
    {
      src: '/thumbnail/thumbnail (2).jpg',
      alt: 'Thumbnail 2',
    },
    {
      src: '/thumbnail/thumbnail (3).jpg',
      alt: 'Thumbnail 3',
    },
    {
      src: '/thumbnail/thumbnail (4).jpg',
      alt: 'Thumbnail 4',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="featured-thumbnails py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Featured Thumbnails
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {thumbnails.map((thumbnail, index) => (
          <motion.div
            key={index}
            className="thumbnail rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedThumbnailSection;
