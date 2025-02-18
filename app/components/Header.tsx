"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Close the sheet when a link is clicked
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

        {/* Hamburger Icon replaced with Sheet */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isSheetOpen}  onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <button className="text-white focus:outline-none">
                <div className="space-y-1">
                  <div className="h-1 w-6 bg-white"></div>
                  <div className="h-1 w-6 bg-white"></div>
                  <div className="h-1 w-6 bg-white"></div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side={'top'} className="bg-black/40">
              <SheetHeader>
                <SheetTitle className="text-start text-4xl mt-10 text-white flex"><h1>Romeo</h1>
                <span className="text-[#30D6F3]">Gfx</span></SheetTitle>
               
              </SheetHeader>
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-10 text-start mt-8">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
