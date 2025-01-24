import React from "react";
import Image from "next/image";
import Links from "./Links";
import Btn from "./Btn";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero min-h-screen text-white flex flex-col lg:flex-row items-center  justify-center p-6 lg:p-16">
      {/* Left Content: Image */}
      <div className="hero-image w-full mt-10 lg:w-1/2 mb-6 lg:mb-0">
        <Image
          src="/profile_image/profile_image.png"
          alt="Graphic Designer"
          width={500}
          height={500}
          className="w-full rounded-lg object-cover shadow-lg"
          priority
        />
      </div>

      {/* Right Content: Title, Description, Social Media, Buttons */}
      <div className="hero-content w-full lg:w-1/2 flex flex-col items-start text-center md:text-start">
        {/* Title */}
     <div className="flex ">
     <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Hi, I&apos;m Romeo<span className="text-[#30D6F3]">GFX</span>
        </h1>
     </div>

        {/* Description */}
        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          I specialize in creating unique, visually stunning designs that tell a
          story and captivate your audience.
        </p>

        {/* Social Media Handles */}
        <div className="social-media flex items-center justify-center md:justify-start w-full space-x-4 mb-6">
          <Links />
        </div>

        {/* Buttons */}
        <div className="buttons flex space-x-4">
          <Btn text="View My work" />
          <Btn text="Contact" />{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Note: Replace `path-to-your-image.jpg` with the actual path to your image.
