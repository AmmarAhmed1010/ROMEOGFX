import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Btn from "./Btn";

const HeroSection: React.FC = () => {
 
  return (
    <section
      id="home"
      className="md:h-[95vh] h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-center lg:px-16 py-10 lg:py-20 text-white"
    >
      {/* Right Content: Text & Buttons */}
      <div className="hero-content w-full lg:w-1/2 text-center ">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
          Hi, I&apos;m <span className="text-[#30D6F3]">RomeoGFX</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-3xl mb-6 leading-relaxed">
          I specialize in creating unique, visually stunning designs that tell
          a story and captivate your audience.
        </p>

        {/* Social Media Handles */}
        <div className="flex justify-center  space-x-6 mb-6">
          {[
            { icon: FaFacebookF, link: "https://www.facebook.com" },
            { icon: FaTwitter, link: "https://www.twitter.com" },
            { icon: FaInstagram, link: "https://www.instagram.com" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#30D6F3] transition duration-300 transform hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#30D6F3]"
            >
              <Icon size={40} />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <Btn text="View My Work" link="mywork" />
          <Btn text="Contact"  link="contact" />
        </div>
      </div>

      {/* Left Content: Image */}
      <div className="hero-image w-full lg:w-1/2 flex justify-center">
        <Image
          src="/profile_image/profile_image.png"
          alt="Graphic Designer"
          width={500}
          height={500}
          className="w-72 sm:w-96 lg:w-full lg:max-w-[550px] rounded-lg object-cover shadow-lg transition duration-300"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
