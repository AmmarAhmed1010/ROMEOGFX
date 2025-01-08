"use client"
import React from "react";

interface NavigationItem {
  id: number;
  title: string;
  route: string;
}

const navigationItems: NavigationItem[] = [
  { id: 1, title: "Thumbnails", route: "/thumbnails" },
  { id: 2, title: "IRL Mockups", route: "/irl-mockups" },
  { id: 3, title: "Banners", route: "/banners" },
  { id: 4, title: "Overlays", route: "/overlays" },
];

const WorkNavigation: React.FC = () => {
  const handleNavigation = (route: string) => {
    window.location.href = route;
  };

  return (
    <section id="mywork" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl heading">Explore My Work</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300"
            onClick={() => handleNavigation(item.route)}
          >
            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkNavigation;
