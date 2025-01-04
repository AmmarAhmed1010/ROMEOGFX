import React from 'react';
import { FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Thumbnail Design",
      description: "Eye-catching YouTube thumbnails with vibrant colors and strategic layouts.",
      icon: <FaYoutube size={40} color="#FF0000" />,
    },
    {
      name: "Overlay & Banner Design",
      description: "Stream overlays and social media banners optimized for maximum impact.",
      icon: <FaTwitch size={40} color="#9146FF" />,
    },
    {
      name: "Adobe Photoshop",
      description: "Expert in advanced editing, retouching, and creative effects.",
      icon: <FaTwitch size={40} color="#FF0000" />,
    },
    {
      name: "Adobe Illustrator",
      description: "Specialized in vector art, logo design, and typography.",
      icon: <FaTwitch size={40} color="#FF0000" />,
    },
    {
      name: "Social Media Expertise",
      description: "Designs tailored for platforms like Instagram, Facebook, and more.",
      icon: <FaInstagram size={40} color="#C13584" />,
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Creative Arsenal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              {skill.icon}
              <h3 className="text-2xl font-bold mt-4">{skill.name}</h3>
              <p className="text-gray-600 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
