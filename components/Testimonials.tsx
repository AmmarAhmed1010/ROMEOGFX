import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      icon: <FaUserCircle size={40} />,
      description: "RomeoGFX designed an amazing thumbnail that boosted my videos views!",
      subscribers: "1.2M Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Creative and professional work! Highly recommend RomeoGFXs services.",
      subscribers: "800K Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Exceptional designs that truly stand out. My channels visuals are on point",
      subscribers: "500K Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Fast and reliablebThe thumbnails helped me gain more engagement.",
      subscribers: "2.3M Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Absolutely loved the work! The attention to detail is phenomenal.",
      subscribers: "300K Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "RomeoGFX transformed my channels branding. Highly impressed!",
      subscribers: "1.5M Subscribers",
    },
  ];

  return (
    <div id='testimonials' className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#A9BCC0] font-serif italic mb-8">
        Testimonials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white h-[280px] rounded-lg shadow-md p-6 text-center"
          >
            <div className="text-blue-500 mb-4">{testimonial.icon}</div>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              {testimonial.description}
            </p>
            <p className="text-red-500 font-semibold">{testimonial.subscribers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
