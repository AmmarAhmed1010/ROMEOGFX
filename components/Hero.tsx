"use client"
import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-center min-h-[100vh] text-yellow-500">
      <div className="text-center heading space-y-6">
        {/* This block will display the text with two lines on mobile, and one line on desktop */}
        <div className="text-5xl md:text-9xl  italic font-semibold leading-tight">
          <span className="block sm:inline">Creating for </span>
          <span className="block sm:inline">Creators</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center  space-x-4 md:pt-6 ">
          {/* My Work Button */}
          <Link to="myWork" smooth={true} duration={500} className="px-6 py-3 md:px-12 md:text-xl bg-[#29629E] text-white rounded-3xl hover:bg-red-600 cursor-pointer">
            My Work
          </Link>

          {/* Contact Me Button */}
          <a 
            href="https://wa.me/+923158552233?text=Hello!%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-12 md:text-xl bg-[#29629E] text-white rounded-3xl  cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
