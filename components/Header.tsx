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
    <header className="bg-black text-yellow-500 p-10 fixed w-full top-0">
      <div className="flex justify-between items-center">
        {/* Logo */}
        
        <div>
  <Link
    to="home"
    smooth={true}
    duration={500}
    className="text-3xl font-bold cursor-pointer hover:text-red-500"
  >
    RomeoGfx
  </Link>
</div>

        {/* Navigation Links for Desktop */}
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
            to="mywork"
            smooth={true}
            duration={500}
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={toggleMenu}
          >
            My work
          </Link>
          <Link
            to="featured"
            smooth={true}
            duration={500}
            className="text-xl cursor-pointer hover:text-red-500"
            onClick={toggleMenu}
          >
            Featured
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
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Skills
          </Link>
          <Link
            to="plans"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Plans
          </Link>

          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
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
        className={`fixed top-0 right-0 h-full w-[70%] bg-black text-white z-40 flex flex-col items-center justify-center space-y-6 md:hidden`}
      >
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
          to="mywork"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={toggleMenu}
        >
          My work
        </Link>
        <Link
          to="featured"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={toggleMenu}
        >
          Featured
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          to="plans"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={toggleMenu}
        >
          Plans
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={toggleMenu}
        >
          Services
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
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer hover:text-red-500"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
