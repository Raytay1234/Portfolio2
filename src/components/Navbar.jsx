import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MyPortfolio
        </h1>
        <ul className="flex items-center space-x-6">
          <li><Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
