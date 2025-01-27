"use client";
import React, { useState } from "react";

const categories = [
  { name: "IRL", images: Array.from({ length: 20 }, (_, i) => `/images/irl/irl-${i + 1}.jpg`) },
  { name: "Banner", images: Array.from({ length: 20 }, (_, i) => `/images/banner/banner-${i + 1}.jpg`) },
  { name: "Thumbnail", images: Array.from({ length: 20 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`) },
  { name: "Logo", images: Array.from({ length: 20 }, (_, i) => `/images/logo/logo-${i + 1}.jpg`) },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (name: string) => {
    setActiveCategory((prev) => (prev === name ? null : name));
  };

  return (
    <div className="p-6 space-y-6 bg-black text-white">
      {categories.map((category, index) => (
        <div key={index} className="space-y-4">
          {/* Category Header */}
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full flex justify-between items-center text-xl font-bold bg-red-500 px-4 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            <span>{category.name}</span>
            <span>{activeCategory === category.name ? "▲" : "▼"}</span>
          </button>

          {/* Image Grid (Collapsible Section) */}
          {activeCategory === category.name && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 transition-all duration-500">
              {category.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={image}
                    alt={`${category.name} ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">View</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
