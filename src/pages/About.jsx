import React from "react";
import { motion as Motion } from "framer-motion";

const skills = [
  "React", "TailwindCSS", "JavaScript", "TypeScript",
  "Node.js", "Express", "Git & GitHub", "REST APIs", "Figma", "Vite"
];

const education = [
  {
    school: "Epren Academy",
    degree: "Primary Education",
    period: "2009 – 2015"
  },
  {
    school: "kauti Primary School",
    degree: "Primary Education",
    period: " 2015-2018"
  },
  {
    school: "Kitengella International School",
    degree: "High School Diploma",
    period: "2018 – 2022"
  },
  {
    school: "Interior Institute of Technology",
    degree: "Certificate in Full Stack Web Development",
    period: "2024 – 2025"
  },
  {
    school: "Inceptor Institute of Technology",
    degree: "Diploma in Web and Software Development",
    period: "2025 – Present"
  }
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Intro */}
        <Motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Motion.img
            src="/profile.jpg" // add your photo in /public
            alt="Profile"
            className="w-36 h-36 mx-auto rounded-full shadow-lg mb-6 border-4 border-blue-600 object-cover"
            whileHover={{ scale: 1.05 }}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Ryan
            </span>{" "}
            — a passionate frontend developer who loves turning ideas into
            interactive and visually appealing web experiences.
            <br />
            I specialize in building responsive, user-friendly interfaces with
            React, TailwindCSS, and modern JavaScript. My mission is to craft
            products that not only look good but also provide seamless usability.
          </p>
          <Motion.a
            href="/Resume.pdf"
            download
            className="mt-10 inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </Motion.a>
        </Motion.div>

        {/* Skills */}
        <Motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <Motion.span
                key={i}
                className="px-5 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full shadow-sm hover:shadow-md transition text-sm font-medium"
                whileHover={{ scale: 1.08 }}
              >
                {skill}
              </Motion.span>
            ))}
          </div>
        </Motion.div>

        {/* Education Timeline */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          <div className="relative border-l-4 border-blue-600 dark:border-blue-500 pl-6 space-y-10">
            {education.map((edu, i) => (
              <Motion.div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition relative"
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <span className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></span>
                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.period}
                </p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
