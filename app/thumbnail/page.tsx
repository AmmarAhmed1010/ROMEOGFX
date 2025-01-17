import React from 'react';
import Image from 'next/image';
import HeaderNew from '@/components/HeaderNew';

const page = () => {
  const images = [
    '/thumbnail/thumbnail (1).jpg',
    '/thumbnail/thumbnail (2).jpg',
    '/thumbnail/thumbnail (3).jpg',
    '/thumbnail/thumbnail (4).jpg',
    '/thumbnail/thumbnail (5).jpg',
    '/thumbnail/thumbnail (6).jpg',
    '/thumbnail/thumbnail (7).jpg',
    '/thumbnail/thumbnail (8).jpg',
    '/thumbnail/thumbnail (9).jpg',
    '/thumbnail/thumbnail (10).jpg',
    '/thumbnail/thumbnail (11).jpg',
    '/thumbnail/thumbnail (12).jpg',
    '/thumbnail/thumbnail (13).jpg',
    '/thumbnail/thumbnail (14).jpg',
    '/thumbnail/thumbnail (15).jpg',
  ];

  return (

    <>
    <HeaderNew/>
    <div className="mt-24">
      <h1 className="text-center heading text-3xl ">Thumbnails</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      >
        {images.map((src, index) => (
           <Image 
           key={index}
           src={src}// Updated image source
           alt={`Image ${index + 1}`}
           height="400"
           width="400"
           className="object-contain rounded-3xl"
           />
        ))}
      </div>
    </div>
    </>
  );
};

export default page;
