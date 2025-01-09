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
      description: "Creative and professional work! Highly recommend RomeoGFX's services.",
      subscribers: "800K Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Exceptional designs that truly stand out. My channel's visuals are on point.",
      subscribers: "500K Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Fast and reliable. The thumbnails helped me gain more engagement.",
      subscribers: "2.3M Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "Absolutely loved the work! The attention to detail is phenomenal.",
      subscribers: "300K Subscribers",
    },
    {
      icon: <FaUserCircle size={40} />,
      description: "RomeoGFX transformed my channel's branding. Highly impressed!",
      subscribers: "1.5M Subscribers",
    },
  ];

  return (
    <div id="testimonials" className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl  lg:text-5xl heading text-center">What Our Clients Say</h1>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between bg-[#100213] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:translate-y-4"
          >
            <div className="absolute top-[-40px] bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 p-3 rounded-full shadow-lg">
              {testimonial.icon}
            </div>
            <p className="text-white text-lg mb-6 text-center leading-relaxed">{testimonial.description}</p>
            <p className="text-red-700 font-semibold text-xl">{testimonial.subscribers}</p>

            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500 to-transparent rounded-lg opacity-40"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
