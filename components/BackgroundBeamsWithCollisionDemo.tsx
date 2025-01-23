import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import Btn from "./Btn";
import Links from "./Links";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div id="home" className="">
      {/* Background Beams */}
      <BackgroundBeamsWithCollision className="min-h-screen flex flex-col items-center justify-center text-teal-300">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="relative mx-auto inline-block text-yellow-500 text-6xl font-extrabold mb-4">
            RomeoGFX
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Transforming ideas into captivating visuals. Lets craft something extraordinary together.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <Btn text="View My work" />
          <Btn text="Contact" />

        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center gap-8 text-2xl text-gray-400">
         <Links/>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>Designed with passion by RomeoGFX</p>
        </footer>
      </BackgroundBeamsWithCollision>
    </div>
  );
}