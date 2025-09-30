import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 12;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);
    }
  }, [location.state]);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-black text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ryan 👋</h1>
        <p className="text-xl mb-6">A passionate Web and Software Developer</p>
        <div className="flex gap-4">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200 transition"
          >
            View My Work
          </button>
          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
