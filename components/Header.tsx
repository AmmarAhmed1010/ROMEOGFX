"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // For single-page navigation

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md kfixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="text-2xl font-bold">RomeoGfx</div>

        {/* Middle */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Home
          </Link>
          <Link
            to="myWork"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            My Work
          </Link>
          <Link
            to="packages"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Packages
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Testimonials
          </Link>
        </nav>

        {/* Right */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Contact Me
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              className="h-1 w-6 bg-white mb-1"
            ></motion.div>
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="h-1 w-6 bg-white mb-1"
            ></motion.div>
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0 }}
              className="h-1 w-6 bg-white"
            ></motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "100vh" : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full bg-black overflow-hidden flex flex-col items-center md:hidden"
      >
        <div className="flex flex-col items-center justify-center space-y-6 mt-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="myWork"
            smooth={true}
            duration={500}
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={toggleMenu}
          >
            My Work
          </Link>
          <Link
            to="packages"
            smooth={true}
            duration={500}
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={toggleMenu}
          >
            Packages
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <a
            href="#contact"
            className="text-xl bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            onClick={toggleMenu}
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
