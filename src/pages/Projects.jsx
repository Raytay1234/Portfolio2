import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Built with React & TailwindCSS",
    demo: "https://your-portfolio-link.com",
    code: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Store",
    desc: "React + Stripe + Firebase",
    demo: "https://electro-shop-azure.vercel.app/",
    code: "https://github.com/Raytay1234/Electro-Shop",
  },
  {
    title: "Dashboard UI",
    desc: "Analytics dashboard using Recharts",
    demo: "https://dashboard-theta-mauve.vercel.app/",
    code: "https://github.com/Raytay1234/Dashboard",
  },
];

const Projects = () => {
  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
