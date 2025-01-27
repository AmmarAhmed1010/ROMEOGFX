"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header
      className="bg-[#0b010c] bg-opacity-80 border-t-2 border-b-2 border-gray-500 text-white px-6 py-4 lg:px-8 lg:py-6 z-50 fixed w-full top-0"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" to="home">
            <div className="text-2xl flex font-serif font-bold md:text-3xl cursor-pointer">
              <h1>Romeo</h1>
              <span className="text-[#30D6F3]">Gfx</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#30D6F3]"
          >
            Home
          </Link>
          <Link
            to="featured"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-[#30D6F3]"
          >
            Featured
          </Link>
          <Link
            to="mywork"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-[#30D6F3]"
          >
            My Work
          </Link>
          <Link
            to="achievements"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-[#30D6F3]"
          >
            Achievements
          </Link>
          <Link
            to="priceList"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-[#30D6F3]"
          >
            Price List
          </Link>
          <Link
            to="plans"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-[#30D6F3]"
          >
            Plans
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="space-y-1">
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
            </div>
          </button>

          {/* Animated Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  className="absolute top-5 right-5 text-white text-3xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </button>
                <nav className="flex flex-col space-y-10 text-center">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-semibold text-white hover:text-[#30D6F3] cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link
                    to="featured"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-2xl font-semibold text-white hover:text-[#30D6F3] cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Featured
                  </Link>
                  <Link
                    to="mywork"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-2xl font-semibold text-white hover:text-[#30D6F3] cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    My Work
                  </Link>
                  <Link
                    to="achievements"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-2xl font-semibold text-white hover:text-[#30D6F3] cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Achievements
                  </Link>
                  <Link
                    to="priceList"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-2xl font-semibold text-white hover:text-[#30D6F3] cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Price List
                  </Link>
                  <Link
                    to="plans"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-2xl font-semibold text-white hover:text-[#30D6F3] cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Plans
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
