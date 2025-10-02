import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-emerald-600 dark:bg-gray-900 text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          Ryan 
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
