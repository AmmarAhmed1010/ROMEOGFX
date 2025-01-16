import React from 'react';
import Image from 'next/image';

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
    <div
      className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full"
          style={{
            paddingTop: '75%', // Aspect ratio container
          }}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            style={{
              objectFit: 'contain',
              borderRadius: '0.75rem', // Rounded corners
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
