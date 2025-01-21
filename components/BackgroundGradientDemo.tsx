"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    imageSrc: "/thumbnail/thumbnail (1).jpg",
    altText: "jordans",
    title: "Air Jordan 4 Retro Reimagined",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    price: "$100",
  },
  {
    id: 2,
    imageSrc: "/thumbnail/thumbnail (2).jpg",
    altText: "jordans",
    title: "Air Jordan 4 Retro Reimagined",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    price: "$100",
  },
  {
    id: 3,
    imageSrc: "/thumbnail/thumbnail (3).jpg",
    altText: "jordans",
    title: "Air Jordan 4 Retro Reimagined",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    price: "$100",
  },
  {
    id: 4,
    imageSrc: "/thumbnail/thumbnail (4).jpg",
    altText: "jordans",
    title: "Air Jordan 4 Retro Reimagined",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    price: "$100",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div id="plans" className="pb-10">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl heading">
        My Plans
      </h2>

      <div id="list" className="flex overflow-x-auto gap-6">
        {cardData.map((card) => (
          <BackgroundGradient
          
            key={card.id}
            className="rounded-[22px] w-[300px] p-4 bg-black md:mx-auto"
          >
            <Image
              src={card.imageSrc}
              alt={card.altText}
              height="400"
              width="400"
              className="object-contain rounded-3xl"
            />
            <p className="text-base sm:text-xl text-white mt-4 mb-2">{card.title}</p>
            <p className="text-sm text-white">{card.description}</p>
            <div className="flex w-full justify-center items-center">
              <button className="rounded-full border-2 border-purple-700 pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {card.price}
                </span>
              </button>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
