import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Code, Globe, Cpu, PenTool } from "lucide-react";

// 🌟 Reusable animation variant
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

// 🧩 Featured Projects
const featuredProjects = [
  {
    title: "E-Commerce Store",
    description: "A modern store with cart & checkout using React + Node.js.",
    image: "/projects/ecommerce.png",
    link: "/projects",
  },
  {
    title: "Dashboard Analytics",
    description: "Interactive admin panel with charts & authentication.",
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

// ⚙️ Skills
const skills = [
  { icon: <Code size={32} />, title: "Frontend", tools: "React, Next.js, TailwindCSS" },
  { icon: <Cpu size={32} />, title: "Backend", tools: "Node.js, Express, MongoDB" },
  { icon: <Globe size={32} />, title: "APIs", tools: "REST, GraphQL, Firebase" },
  { icon: <PenTool size={32} />, title: "Design", tools: "Figma, Adobe XD, UI/UX Principles" },
];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <>
      {/* 🌈 HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
        {/* Floating orbs for life */}
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl top-20 left-10 opacity-40"
        />
        <Motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[28rem] h-[28rem] bg-blue-400 rounded-full blur-3xl bottom-16 right-16 opacity-30"
        />

        <Motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.3)}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            Hi, I’m <span className="text-yellow-300">Ryan</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
            A passionate <span className="font-semibold text-yellow-200">Web & Software Developer</span><br />
            turning creative ideas into seamless digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Motion.button
              whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              🚀 View My Work
            </Motion.button>

            <Motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg shadow-lg hover:bg-gray-700 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              👤 About Me
            </Motion.button>

            <Motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition"
            >
              📄 Download Resume
            </Motion.a>
          </div>
        </Motion.div>

        {/* Subtle glowing wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-white dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.23C209.85 84.38 105.47 127.72 0 120V0h1200v27.35c-103.47 60.94-227.57 87.66-350.61 59.31C735.19 60.59 630.23-5.47 521.52-5.23 419.79-5.03 324.84 57.26 221.39 56.23z"
            fill="currentColor"
          ></path>
        </svg>
      </section>

      {/* 💼 FEATURED PROJECTS */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Motion.h2
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-14"
          >
            ⚙️ Featured Projects
          </Motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((proj, idx) => (
              <Motion.div
                key={idx}
                variants={fadeUp(idx * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform-gpu transition-all duration-300 group"
                onClick={() => navigate(proj.link)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover group-hover:opacity-80 transition duration-300"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {proj.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Motion.div>
            ))}
          </div>

          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="mt-14 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition"
          >
            See All Projects →
          </Motion.button>
        </div>
      </section>

      {/* 🧠 SKILLS */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
          >
            🧠 My Skills
          </Motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, i) => (
              <Motion.div
                key={i}
                variants={fadeUp(i * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.tools}</p>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Animated gradient behind skills */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 blur-2xl"></div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center relative overflow-hidden">
        <Motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let’s Build Something Amazing!</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <Motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            ✉️ Get in Touch
          </Motion.button>
        </Motion.div>
      </section>
    </>
  );
};

export default Home;
