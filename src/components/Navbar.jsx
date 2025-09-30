import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goTo = (path, id) => {
    if (window.location.pathname === path) {
      // Already on path → scroll directly
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 12;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Navigate and pass scroll target
      navigate(path, { state: { scrollTo: id } });
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Ryan</h1>

        {/* Links */}
        <div className="flex gap-6">
          <button onClick={() => goTo("/", "home")} className="hover:text-blue-500">Home</button>
          <button onClick={() => goTo("/", "about")} className="hover:text-blue-500">About</button>
          <button onClick={() => goTo("/", "projects")} className="hover:text-blue-500">Projects</button>
          <button onClick={() => goTo("/", "contact")} className="hover:text-blue-500">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
