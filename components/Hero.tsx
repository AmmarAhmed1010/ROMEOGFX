import React from 'react';

const Hero: React.FC = () => {
  const text: string[] = [
    "I Am RomeoGFX",
    "I specialize in Styling",
    "I am a graphic designer from Pakistan",
    "With over three years of experience, I create eye-catching YouTube thumbnails",
    "My goal is to enhance your visual presence with impactful designs.",
  ];

  return (
    <div id="home" className="flex items-center justify-center h-[90vh]  text-white">
      <div className="text-center space-y-6 max-w-4xl">
        {text.map((line: string, index: number) => (
          <div key={index} className="text-3xl md:text-5xl font-semibold leading-tight">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
