import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8 mt-12">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl text-center font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-blue-600 transition" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-pink-500 transition" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl hover:text-blue-400 transition" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-blue-700 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; 2025 RomeoGFX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
