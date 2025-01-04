import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        
        {/* Image and Bio */}
        <div className="flex justify-center items-center mb-8">
          <img
            src="/profile.jpg"
            alt="RomeoGFX"
            className="w-32 h-32 rounded-full border-4 border-red-500 mr-6"
          />
          <div className="text-left max-w-2xl">
            <p className="text-lg text-gray-700">
              Hi! I'm RomeoGFX, a passionate graphic designer with over 3 years of experience in creating YouTube thumbnails, stream overlays, social media graphics, and more. I specialize in helping creators enhance their content with eye-catching visuals that attract viewers and boost engagement.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              My goal is to help you build your brand and stand out in the digital space. Whether you're a YouTuber, streamer, or social media influencer, I have the skills and creativity to bring your vision to life.
            </p>
          </div>
        </div>

        {/* Skills & Tools */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
          <ul className="text-lg text-gray-700 list-disc pl-6">
            <li>Custom YouTube Thumbnails & Banners</li>
            <li>Stream Overlays & Alerts</li>
            <li>Social Media Graphics</li>
            <li>Logo Design & Branding</li>
            <li>Video Editing & Motion Graphics</li>
            <li>Adobe Photoshop & Illustrator</li>
            <li>Canva Design Expertise</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
