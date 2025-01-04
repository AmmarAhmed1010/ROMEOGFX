import React from 'react';

const Hero: React.FC = () => {
  const text: string[] = [
    "I Am RomeoGFX",
    "I specialize in Styling",
    "I am RomeoGFX, a dedicated graphic designer from Pakistan",
    "With over three years of experience, I specialize in creating eye-catching YouTube thumbnails",
    "My goal is to enhance your visual presence with creative and impactful designs.",
  ];

  return (
    <div className="flex items-center  justify-center h-[90vh] text-white">
      <div className="text-center space-y-6 max-w-4xl">
        {text.map((line: string, index: number) => (
          <h1 key={index} className="text-3xl md:text-5xl font-bold">
            {line}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Hero;
