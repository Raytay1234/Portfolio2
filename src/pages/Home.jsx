import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✅ Mini project highlight data
const featuredProjects = [
  {
    title: "E-Commerce Store",
    description: "Full-stack shop with cart & checkout using React + Node.",
    image: "/projects/ecommerce.png",
    link: "/projects",
  },
  {
    title: "Dashboard Analytics",
    description: "Interactive admin panel with charts & auth.",
    image: "/projects/Dashboard.png",
    link: "/projects",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React & TailwindCSS.",
    image: "/projects/Portfolio.png",
    link: "/projects",
  },
];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        const navbarHeight =
          document.getElementById("navbar")?.offsetHeight || 0;
        if (el) {
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight -
            12;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);
    }
  }, [location.state]);

  return (
    <>
      {/* Hero Section */}
      <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-black text-white text-center relative">
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I’m <span className="text-yellow-300">Ryan</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10">
            A passionate <span className="font-semibold">Web & Software Developer</span> <br />
            crafting seamless digital experiences.
          </p>

          {/* Call to Action */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              View My Work
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow hover:bg-gray-700 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              About Me
            </button>
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-500 transition"
            >
              Download Resume
            </a>
          </div>
        </Motion.div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 text-white dark:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39 56.23C209.85 84.38 105.47 127.72 0 120V0h1200v27.35c-103.47 60.94-227.57 87.66-350.61 59.31-114.2-26.07-219.16-92.13-327.87-91.89-101.73.2-196.68 62.49-300.13 61.46-92.44-.95-178.34-57.24-300-0z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </main>

      {/* ✅ Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((proj, idx) => (
              <Motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => navigate(proj.link)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {proj.description}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>

          <button
            onClick={() => navigate("/projects")}
            className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            View All Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
