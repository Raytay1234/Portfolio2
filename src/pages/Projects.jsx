import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A full-stack online store with product listings, shopping cart, and secure checkout. Designed with a focus on smooth user experience and performance.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://electro-shop-azure.vercel.app/",
    github: "https://github.com/Raytay1234/Electro-Shop",
  },
  {
    title: "Dashboard Analytics",
    description:
      "A responsive admin dashboard for monitoring metrics and managing users. Includes real-time charts, Firebase authentication, and custom theme support.",
    image: "/projects/Dashboard.png",
    tech: ["React", "Recharts", "Firebase"],
    demo: "https://dashboard-theta-mauve.vercel.app/",
    github: "https://github.com/Raytay1234/Dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, education, and skills. Built with React, TailwindCSS, and Framer Motion for smooth animations and performance.",
    image: "/projects/portfolio2.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    demo: "https://portfolio2-rose-phi-44.vercel.app/",
    github: "https://github.com/Raytay1234/Portfolio2",
  },
  {
    title: "Pricing Plan Component",
    description:
      "A modern pricing section with toggleable monthly/annual plans. Fully responsive and accessible UI built using React and TailwindCSS.",
    image: "/projects/Pricing plan.png",
    tech: ["React", "TailwindCSS"],
    demo: "https://pricingplan-dees.vercel.app/",
    github: "https://github.com/Raytay1234/Pricingplan",
  },
  {
    title: "Joke Generator",
    description:
      "A fun, lightweight app that fetches random jokes from a public API using Axios. Features responsive design and clean, minimalist UI.",
    image: "/projects/Joke generator.png",
    tech: ["React", "Axios"],
    demo: "https://joke-gen-phi.vercel.app/",
    github: "https://github.com/Raytay1234/Joke-Gen",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz platform with timed questions, score tracking, and instant feedback. Built entirely with React.",
    image: "/projects/Quiz app.png",
    tech: ["React"],
    demo: "https://quiz-game-nine-nu.vercel.app/",
    github: "https://github.com/Raytay1234/Quiz-game",
  },
  {
    title: "LogIn/SignUp form",
    description:
      "A sleek login and signup form with client-side validation and responsive design. Built using React and TailwindCSS.",
    image: "/projects/forms.png",
    tech: ["React", "TailwindCSS"],
    demo: "https://forms-mauve-sigma.vercel.app/",
    github: "https://github.com/Raytay1234/Forms",
  },
  {
    title: "Performance test app",
    description:
      "A simple app to test and compare the performance of different JavaScript functions. Built with React.",
    image: "/projects/performance.png",
    tech: ["React"],
    demo: "https://working-perfomance-test.vercel.app/",

    github: "https://github.com/Raytay1234/working-perfomance-test",
  },
  {
    title: "Real -time trade",
    description:
      "A real-time stock trading simulator with live price updates and portfolio management. Built using React and WebSockets.",
    image: "/projects/trade.png",
    tech: ["React", "WebSockets"],
    demo: "https://real-time-trading.vercel.app/",
    github: "https://github.com/Raytay1234/Real-time-trading-",
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting app that fetches data from a public API. Features location search, current conditions, and a 5-day forecast.",
    image: "/projects/weather.png",
    tech: ["React", "API"],
    demo: "https://weather-dun-nu.vercel.app/",
    github: "https://github.com/Raytay1234/weather",
  },
{    title: "IMDb clone",
    description:
      "A movie database app that allows users to search for movies, view details, and read reviews. Built with React and The Movie Database API.",
    image: "/projects/OMDb.png",
    tech: ["React", "API"],
    demo: "https://om-db-nine.vercel.app/",
    github: "https://github.com/Raytay1234/OMDb",
}
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Projects = () => {
  // ✅ Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <Motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that highlight my technical abilities and
            design sensibility — from full-stack web apps to polished front-end
            components.
          </p>
        </Motion.div>

        {/* Projects Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, i) => (
            <Motion.div
              key={i}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              currentPage === 1
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              currentPage === totalPages
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
