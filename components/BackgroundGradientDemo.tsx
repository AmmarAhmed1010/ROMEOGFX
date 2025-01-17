"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div id="plans" className="pb-10">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl heading">
        My Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Card */}
        <BackgroundGradient className="rounded-[22px] p-4 bg-black">
          <Image
            src={`/thumbnail/thumbnail (1).jpg`} // Updated image source
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-3xl" // Added rounded class
          />
          <p className="text-base sm:text-xl text-white mt-4 mb-2">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-white">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is by
            entering raffles and waiting for the official releases.
          </p>
         <div className="flex w-full justify-center items-center">
         <button className="rounded-full border-2  border-purple-700 pl-4 pr-1 py-1 text-white flex  items-center space-x-1 bg-black mt-4 text-xs font-bold">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
         </div>
        </BackgroundGradient>

        {/* Second Card */}
        <BackgroundGradient className="rounded-[22px] p-4  bg-black">
          <Image
            src={`/thumbnail/thumbnail (2).jpg`} // Updated image source
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-3xl" // Added rounded class
          />
          <p className="text-base sm:text-xl text-white mt-4 mb-2">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-white">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is by
            entering raffles and waiting for the official releases.
          </p>
          <div className="flex w-full justify-center items-center">
         <button className="rounded-full border-2  border-purple-700 pl-4 pr-1 py-1 text-white flex  items-center space-x-1 bg-black mt-4 text-xs font-bold">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
         </div>
        </BackgroundGradient>

        {/* Third Card */}
        <BackgroundGradient className="rounded-[22px] p-4  bg-black">
          <Image
            src={`/thumbnail/thumbnail (3).jpg`} // Updated image source
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-3xl" // Added rounded class
          />
          <p className="text-base sm:text-xl text-white mt-4 mb-2">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-white">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is by
            entering raffles and waiting for the official releases.
          </p>
          <div className="flex w-full justify-center items-center">
         <button className="rounded-full border-2  border-purple-700 pl-4 pr-1 py-1 text-white flex  items-center space-x-1 bg-black mt-4 text-xs font-bold">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
         </div>
        </BackgroundGradient>

        {/* Fourth Card */}
        <BackgroundGradient className="rounded-[22px] p-4 bg-black">
          <Image
            src={`/thumbnail/thumbnail (4).jpg`} // Updated image source
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-3xl" // Added rounded class
          />
          <p className="text-base sm:text-xl text-white mt-4 mb-2">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-white">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is by
            entering raffles and waiting for the official releases.
          </p>
          <div className="flex w-full justify-center items-center">
         <button className="rounded-full border-2  border-purple-700 pl-4 pr-1 py-1 text-white flex  items-center space-x-1 bg-black mt-4 text-xs font-bold">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
         </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
