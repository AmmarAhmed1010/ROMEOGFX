"use client"
import { useState } from "react";

const categories = ["IRL", "Banner", "Thumbnail", "Logo"];

const portfolioImages = {
  IRL: Array.from({ length: 20 }, (_, i) => `/irl/irl-${i + 1}.jpg`),
  Banner: Array.from({ length: 20 }, (_, i) => `/images/banner/banner-${i + 1}.jpg`),
  Thumbnail: Array.from({ length: 20 }, (_, i) => `/thumbnail/thumbnail (${i + 1}).jpg`),
  Logo: Array.from({ length: 20 }, (_, i) => `/images/logo/logo-${i + 1}.jpg`),
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="p-4">
      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white ${
              activeCategory === category
                ? "bg-red-600"
                : "bg-gray-800 hover:bg-gray-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolioImages[activeCategory as keyof typeof portfolioImages].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`${activeCategory} ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
