"use client";
import React, { useState } from "react";

const categories = [
  { id: "thumbnails", name: "Thumbnails" },
  { id: "logos", name: "Logos" },
  { id: "banners", name: "Banners" },
  { id: "irl", name: "IRL" },
];

// Sample data for images
type ImageCategories = {
  thumbnails: string[];
  logos: string[];
  banners: string[];
  irl: string[];
};

const images: ImageCategories = {
  thumbnails: Array.from({ length: 20 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`),
  logos: Array.from({ length: 20 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`),
  banners: Array.from({ length: 20 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`),
  irl: Array.from({ length: 20 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`),
};

const WorkCategoriesNew: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof ImageCategories>("thumbnails");

  return (
    <div className="w-full px-4 py-10">
      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as keyof ImageCategories)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeCategory === category.id
                ? "bg-[hsl(189,92%,58%)] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images[activeCategory].map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`${activeCategory}-${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white font-semibold">View</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCategoriesNew;
