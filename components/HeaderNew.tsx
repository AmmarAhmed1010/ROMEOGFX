"use client";
import React from "react";
import Link from "next/link";

const HeaderNew = () => {
  return (
    <header
      className="bg-[#0b010c] bg-opacity-80 border-t-2 border-b-2 border-gray-500 text-white px-6 py-4 lg:px-8 lg:py-6 font-serif z-50 fixed w-full top-0"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl flex font-serif font-bold md:text-3xl cursor-pointer">
          <h1>Romeo</h1>
          <span className="text-[#ffed29]">Gfx</span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-8 text-lg">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNew;
