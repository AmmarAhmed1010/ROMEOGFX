"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Featured() {
  return (
    <>
      <h1
        id="featured"
        className="text-[hsl(189,92%,58%)] font text-3xl md:text-5xl mb-6 font-semibold mt-10 underline"
      >
        Featured Thumbnails
      </h1>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={1000}>
          <Image 
            src="/thumbnail/thumbnail (1).jpg" 
            alt="Thumbnail 1" 
            layout="intrinsic" 
            className="rounded-3xl"
            width={800} 
            height={450} // Adjust to match your image's aspect ratio
          />
          <Image 
            src="/thumbnail/thumbnail (2).jpg" 
            alt="Thumbnail 2" 
            layout="intrinsic" 
            width={800} 
            height={450} 
              className="rounded-3xl"
          />
          <Image 
            src="/thumbnail/thumbnail (3).jpg" 
            alt="Thumbnail 3" 
            layout="intrinsic" 
            width={800} 
            height={450}
              className="rounded-3xl"
          />
          <Image 
            src="/thumbnail/thumbnail (4).jpg" 
            alt="Thumbnail 4" 
            layout="intrinsic" 
            width={800} 
            height={450} 
              className="rounded-3xl"
          />
          <Image 
            src="/thumbnail/thumbnail (5).jpg" 
            alt="Thumbnail 5" 
            layout="intrinsic" 
            width={800} 
            height={450} 
              className="rounded-3xl"
          />
        </Carousel>
      </div>
    </>
  );
}
