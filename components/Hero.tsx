import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="flex items-center justify-center min-h-screen text-yellow-500">
      <div className="text-center italic space-y-6">
        {/* This block will display the text with two lines on mobile, and one line on desktop */}
        <div className="text-5xl md:text-9xl font-semibold leading-tight">
          <span className="block sm:inline">Creating for </span>
          <span className="block sm:inline">Creators</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
