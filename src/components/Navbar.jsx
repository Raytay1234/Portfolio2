import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `relative transition-colors duration-300 ${
      location.pathname === path
        ? "text-blue-300"
        : "text-white hover:text-blue-300"
    }`;

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 
                 dark:from-gray-900/90 dark:to-black/90 backdrop-blur-md 
                 border-b border-white/10 text-white z-50 shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-7">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-200 transition"
        >
          Ryan
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm md:text-base font-medium">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/projects" className={linkClasses("/projects")}>
            Projects
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
