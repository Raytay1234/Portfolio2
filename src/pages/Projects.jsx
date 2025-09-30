import React from "react";
import { motion as Motion } from "framer-motion";

// ✅ Just add new projects here, and they'll auto-render
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
    image: "/projects/portfolio.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    demo: "https://portfolio2-rose-phi-44.vercel.app/",
    github: "https://github.com/Raytay1234/Portfolio2",
  },

];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 ...">
      {/* projects content */}


      <section className="py-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <Motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I’ve worked on recently. Each one
              represents a unique challenge and solution, showcasing my skills in
              frontend and full-stack development.
            </p>
          </Motion.div>

          {/* Projects Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Motion.div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image links to live demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:opacity-90 transition"
                  />
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
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
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
