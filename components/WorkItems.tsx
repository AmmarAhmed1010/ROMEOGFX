"use client"
import React from "react";
import { FaImage, FaDesktop, FaCamera, FaFilm } from "react-icons/fa"; // Import icons

interface NavigationItem {
  id: number;
  title: string;
  route: string;
  icon: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  { id: 1, title: "Thumbnails", route: "/thumbnail.tsx", icon: <FaImage /> },
  { id: 2, title: "IRL Mockups", route: "/irl-mockups", icon: <FaDesktop /> },
  { id: 3, title: "Banners", route: "/banners", icon: <FaCamera /> },
  { id: 4, title: "Overlays", route: "/overlays", icon: <FaFilm /> },
];

const WorkNavigation: React.FC = () => {
  const handleNavigation = (route: string) => {
    window.location.href = route;
  };

  return (
    <section
      id="mywork"
      className="flex flex-col text-white"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl heading">
        Explore My Creative Work
      </h2>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out rounded-xl bg-white bg-opacity-20 p-8 text-center relative group"
            onClick={() => handleNavigation(item.route)}
          >
            {/* Hover Effect - Image/Icon */}
            <div className="group-hover:opacity-100 opacity-80 transition-all duration-300">
              <div className="text-5xl text-red-400 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-red-700 group-hover:to-blue-700 opacity-50 transition-all duration-500 rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkNavigation;
