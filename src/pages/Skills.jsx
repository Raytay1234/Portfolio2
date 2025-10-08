import React from "react";
import { motion as Motion } from "framer-motion";
import { Code, Cpu, Globe, PenTool, Database, Layout } from "lucide-react";

// Animation Variants
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const allSkills = [
  {
    icon: <Code size={36} />,
    title: "Frontend Development",
    description:
      "Building fast, responsive, and visually engaging user interfaces using React, Next.js, and TailwindCSS.",
    tools: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Redux"],
  },
  {
    icon: <Cpu size={36} />,
    title: "Backend Development",
    description:
      "Designing and managing scalable backends with RESTful APIs, authentication, and databases.",
    tools: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    icon: <Globe size={36} />,
    title: "API Integration",
    description:
      "Seamlessly connecting applications to external services and ensuring smooth data exchange.",
    tools: ["REST", "GraphQL", "Postman", "Axios"],
  },
  {
    icon: <Database size={36} />,
    title: "Database Management",
    description:
      "Creating optimized data structures and queries for efficient storage and retrieval.",
    tools: ["MongoDB", "MySQL", "Firebase Firestore"],
  },
  {
    icon: <Layout size={36} />,
    title: "UI/UX & Design",
    description:
      "Crafting clean, user-focused designs with attention to color theory, typography, and layout.",
    tools: ["Figma", "Adobe XD", "Canva"],
  },
  {
    icon: <PenTool size={36} />,
    title: "Version Control & Dev Tools",
    description:
      "Maintaining project consistency and collaboration using modern development workflows.",
    tools: ["Git", "GitHub", "VS Code", "Vite"],
  },
];

const Skills = () => (
  <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
    {/* 🌈 Animated gradient background blur */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-pink-200/10 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 blur-3xl animate-pulse-slow"></div>

    <Motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-6 text-center relative z-10"
    >
      <Motion.h2
        variants={fadeUp(0.1)}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
      >
        🧰 Full Skill Set
      </Motion.h2>

      <Motion.p
        variants={fadeUp(0.2)}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12 text-lg"
      >
        A deep dive into the technologies and tools I use to design, build, and optimize
        powerful digital experiences.
      </Motion.p>

      <Motion.div
        variants={containerVariants}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {allSkills.map((skill, i) => (
          <Motion.div
            key={i}
            variants={fadeUp(i * 0.1)}
            whileHover={{
              y: -8,
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex justify-center text-blue-600 dark:text-blue-400 mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {skill.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Tools: {skill.tools.join(", ")}
            </p>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.div>
  </section>
);

export default Skills;
