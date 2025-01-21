import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div id="home" className="">
      {/* Background Beams */}
      <BackgroundBeamsWithCollision className="min-h-screen flex flex-col items-center justify-center text-white">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="relative mx-auto inline-block bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent text-6xl font-extrabold mb-4">
            RomeoGFX
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Transforming ideas into captivating visuals. Lets craft something extraordinary together.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-md">
            View My Work
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-md">
            Contact Me
          </button>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center gap-8 text-2xl text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaBehance />
          </a>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>Designed with passion by RomeoGFX</p>
        </footer>
      </BackgroundBeamsWithCollision>
    </div>
  );
}