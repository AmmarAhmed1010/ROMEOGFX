"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <header
      className="bg-[#0b010c] bg-opacity-80 border-t-2 border-b-2 border-gray-500 text-white px-6 py-2 lg:px-8 lg:py-6 font-serif z-50 fixed w-full top-0"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" to="home">
        <div className="text-2xl flex font-serif font-bold md:text-3xl cursor-pointer">
        <h1>
              Romeo
            </h1>
            <span className="text-[#ffed29]">Gfx</span>
        </div>
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Home
          </Link>
          <Link
            to="mywork"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-red-500"
          >
            My Work
          </Link>
          <Link
            to="featured"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-red-500"
          >
            Featured
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Testimonials
          </Link>
          <Link
            to="packages"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Packages
          </Link>
          <Link
            to="plans"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Plans
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <div className="space-y-1">
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="h-1 w-6 bg-white"
              ></motion.div>
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="h-1 w-6 bg-white"
              ></motion.div>
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="h-1 w-6 bg-white"
              ></motion.div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8`}
      >
        {/* Close Icon */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✖
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-6 text-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="mywork"
            smooth={true}
            duration={500}
            offset={-100}
            className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
            onClick={toggleMenu}
          >
            My Work
          </Link>
          <Link
            to="featured"
            smooth={true}
            duration={500}
            offset={-110}
            className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Featured
          </Link>
          <Link
            to="plans"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Plans
          </Link>
          <Link
            to="packages"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Packages
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            offset={-30}
            className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
