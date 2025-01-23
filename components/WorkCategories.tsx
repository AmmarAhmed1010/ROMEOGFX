"use client"
import React, { useState, useRef } from "react";
import { FaImage, FaDesktop, FaCamera, FaFilm } from "react-icons/fa"; // Import icons
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Slider from "react-slick"; // Import react-slick for carousel
import Image from "next/image"; // Import Next.js Image component

interface NavigationItem {
  id: number;
  title: string;
  route: string;
  icon: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  { id: 1, title: "Thumbnails", route: "/thumbnail", icon: <FaImage /> },
  { id: 2, title: "IRL Mockups", route: "/irl-mockups", icon: <FaDesktop /> },
  { id: 3, title: "Banners", route: "/banners", icon: <FaCamera /> },
  { id: 4, title: "Overlays", route: "/overlays", icon: <FaFilm /> },
];

const WorkCategories: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<NavigationItem | null>(null);
  
  // Create a reference to the slider instance
  const sliderRef = useRef<Slider | null>(null);

  const handleNavigation = (item: NavigationItem) => {
    setSelectedSection(item);
    setIsDrawerOpen(true);
  };

  // Carousel images with the new path
  const carouselItems = [
    { src: "/thumbnail/thumbnail (3).jpg", alt: "Thumbnail 1" },
    { src: "/thumbnail/thumbnail (6).jpg", alt: "Image 2" },
    { src: "/thumbnail/thumbnail (9).jpg", alt: "Image 3" },
    { src: "/thumbnail/thumbnail (5).jpg", alt: "Image 4" },
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows, custom ones will be added
  };

  return (
  <>
    <h1 id='mywork' className='text-[hsl(189,92%,58%)] text-3xl md:text-5xl mb-6 font-semibold mt-10 underline'>Explore My Work</h1>
    <section  className="flex flex-col text-white">
   
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out rounded-xl bg-white bg-opacity-20 p-8 text-center relative group"
            onClick={() => handleNavigation(item)}
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

      {/* Drawer - Confirm Action */}
      {selectedSection && (
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <DrawerContent className="bg-black/40">
            <DrawerHeader>
              <DrawerTitle className="text-purple-700">{`Explore ${selectedSection.title}`}</DrawerTitle>
            </DrawerHeader>

            {/* Carousel Component */}
            <div className="mt-4 w-full md:w-2/5 mx-auto relative">
              <Slider ref={sliderRef} {...settings}>
                {carouselItems.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500} // Set the desired width for better quality
                      height={300} // Set the desired height for better quality
                      quality={100} // Set the image quality to maximum
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>

              {/* Custom Left and Right Navigation Buttons */}
              <button
                onClick={() => sliderRef.current?.slickPrev()} // Move to the previous slide
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 p-2 text-white rounded-full cursor-pointer z-10"
              >
                &lt;
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()} // Move to the next slide
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 p-2 text-white rounded-full cursor-pointer z-10"
              >
                &gt;
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </section>
  </>
  );
};

export default WorkCategories;
