import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#30D6F3] inline-block">
              Contact Us
            </h3>
            <p className="mb-2 text-gray-300">Email: example@example.com</p>
            <p className="text-gray-300">Phone: +123 456 7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#30D6F3] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "#home" },
                { name: "My Work", link: "#mywork" },
                { name: "Featured", link: "#featured" },
                { name: "Testimonials", link: "#testimonials" },
                { name: "Plans", link: "#plans" },
                { name: "Services", link: "#services" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-[#30D6F3]  transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#30D6F3]  inline-block">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright Notice */}
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>&copy; 2025 RomeoGFX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
