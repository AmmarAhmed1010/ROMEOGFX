"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
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

        {/* Hamburger Icon replaced with Sheet */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <button className="text-white focus:outline-none">
                <div className="space-y-1">
                  <div className="h-1 w-6 bg-white"></div>
                  <div className="h-1 w-6 bg-white"></div>
                  <div className="h-1 w-6 bg-white"></div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Select a section to navigate.
                </SheetDescription>
              </SheetHeader>
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col items-center space-y-6 text-center mt-8">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="mywork"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
                >
                  My Work
                </Link>
                <Link
                  to="featured"
                  smooth={true}
                  duration={500}
                  offset={-110}
                  className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
                >
                  Featured
                </Link>
                <Link
                  to="plans"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
                >
                  Plans
                </Link>
                <Link
                  to="packages"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
                >
                  Packages
                </Link>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  offset={-30}
                  className="text-2xl font-semibold text-yellow-400 hover:text-red-500 cursor-pointer"
                >
                  Testimonials
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
