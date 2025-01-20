"use client";

import { Carousel } from "./ui/carousel";


export function CarouselDemo() {
  const slideData = [
    {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (1).jpg",
      },
      {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (2).jpg",
      },
      {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (3).jpg",
      },
      {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (4).jpg",
      },
      {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (5).jpg",
      },
      {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (6).jpg",
      },
      {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "/thumbnail/thumbnail (7).jpg",
      },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/thumbnail/thumbnail (8).jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
