"use client";
import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative  flex justify-center items-center w-full min-h-[100vh] overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/vid2.mp4" // Replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative text-center z-10">
        {/* Heading */}
        <div className="text-4xl md:text-8xl heading font-semibold italic leading-tight drop-shadow-md text-white">
          <span className="block sm:inline">Creating for </span>
          <span className="block sm:inline">Creators</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {/* My Work Button */}
          <Link
            to="mywork"
            smooth={true}
            duration={500}
            offset={-90}
            className="px-6 py-3 md:px-10 md:py-4 bg-[#29629E] text-white text-sm md:text-lg rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            aria-label="Navigate to My Work section"
          >
            My Work
          </Link>

          {/* Contact Me Button */}
          <a
            href="https://wa.me/+923158552233?text=Hello!%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-10 md:py-4 bg-[#29629E] text-white text-sm md:text-lg rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            aria-label="Contact me on WhatsApp"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
