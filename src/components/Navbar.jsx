import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path) =>
    `block py-2 transition-colors duration-300 ${
      location.pathname === path
        ? "text-blue-300"
        : "text-white hover:text-blue-300"
    }`;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 
                 dark:from-gray-900/90 dark:to-black/90 backdrop-blur-md 
                 border-b border-white/10 text-white z-50 shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-200 transition"
        >
          Ryan
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm md:text-base font-medium">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/projects" className={linkClasses("/projects")}>
            Projects
          </Link>
          <Link to="/skills" className={linkClasses("/skills")}>
            Skills
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-blue-300 transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gradient-to-b from-blue-600/90 to-purple-700/90 
                       dark:from-gray-800/95 dark:to-black/95 px-6 py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4 text-base font-medium">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={linkClasses("/")}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={linkClasses("/about")}
              >
                About
              </Link>
              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={linkClasses("/projects")}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                onClick={() => setMenuOpen(false)}
                className={linkClasses("/skills")}
              >
                Skills
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={linkClasses("/contact")}
              >
                Contact
              </Link>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
