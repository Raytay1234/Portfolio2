import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Ryan</h2>
          <p className="text-sm leading-relaxed">
            Passionate web developer crafting clean, efficient, and user-friendly
            digital experiences with React, Tailwind, and modern web tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Me</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:ryanmugi.dev@gmail.com"
              className="text-blue-300 hover:underline"
            >
              ryanmugi.dev@gmail.com
            </a>
          </p>
          <p className="text-sm">Phone: +254 700 123 456</p>
          <p className="text-sm">Location: Nairobi, Kenya</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.linkedin.com/in/ryanmugi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Raytay1234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/ryguydev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ryan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
