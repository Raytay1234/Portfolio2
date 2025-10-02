import React from "react";
import { motion as Motion } from "framer-motion";

// ✅ Project data
const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A full-stack online store with product listings, shopping cart, and checkout built using React, Node.js, and MongoDB.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://electro-shop-azure.vercel.app/",
    github: "https://github.com/Raytay1234/Electro-Shop",
  },
  {
    title: "Dashboard Analytics",
    description:
      "An interactive admin dashboard with data visualization, user management, and authentication features.",
    image: "/projects/Dashboard.png",
    tech: ["React", "Recharts", "Firebase"],
    demo: "https://dashboard-theta-mauve.vercel.app/",
    github: "https://github.com/Raytay1234/Dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and background. Built with React, TailwindCSS, and Framer Motion.",
    image: "/projects/Portfolio.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    demo: "https://portfolio2-rose-phi-44.vercel.app/",
    github: "https://github.com/Raytay1234/Portfolio2",
  },
  {
    title: "Pricing Plan Component",
    description:
      "A responsive pricing plan component with toggleable monthly/annual billing built using React and TailwindCSS.",
    image: "/projects/Pricing plan.png",
    tech: ["React", "TailwindCSS"],
    demo: "https://pricingplan-dees.vercel.app/",
    github: "https://github.com/Raytay1234/Pricingplan",
  },
  {
    title: "Joke Generator",
    description:
      "A web app that fetches and displays random jokes from an API, built with React and Axios.",
    image: "/projects/Joke generator.png",
    tech: ["React", "Axios"],
    demo: "https://joke-gen-phi.vercel.app/",
    github: "https://github.com/Raytay1234/Joke-Gen",
  },
  {
    title: "Quiz App",
    description:
      "A multiple-choice quiz application with score tracking and timer functionality, built using React.",
    image: "/projects/Quiz app.png",
    tech: ["React"],
    demo: "https://quiz-game-nine-nu.vercel.app/",
    github: "https://github.com/Raytay1234/Quiz-game",
  },
];

// ✅ Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <main className="pt-24 pb-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <Motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects I’ve built recently, showcasing my skills in
            frontend and full-stack development.
          </p>
        </Motion.div>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </a>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-700/40 text-blue-700 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
