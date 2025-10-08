import React from "react";
import { motion as Motion } from "framer-motion";
import { Code, Monitor, Palette, Users } from "lucide-react";

const skills = [
  "React", "TailwindCSS", "JavaScript", "TypeScript",
  "Node.js", "Express", "Git & GitHub", "REST APIs", "Figma", "Vite"
];

const education = [
  { school: "Epren Academy", degree: "Primary Education", period: "2009 – 2015" },
  { school: "Kauti Primary School", degree: "Primary Education", period: "2015 – 2018" },
  { school: "Kitengela International School", degree: "High School Diploma", period: "2018 – 2022" },
  { school: "Inceptor Institute of Technology", degree: "Certificate in Full Stack Web Development", period: "2024 – 2025" },
  { school: "Inceptor Institute of Technology", degree: "Diploma in Web & Software Development", period: "2025 – Present" }
];

const experience = [
  {
    title: "Frontend Developer (Freelance)",
    desc: "Designed and developed responsive web applications using React and TailwindCSS, focusing on user-centric design and performance.",
    period: "2024 – Present",
  },
  {
    title: "UI/UX Designer",
    desc: "Worked on improving interface usability, accessibility, and design systems for small business clients using Figma and Adobe XD.",
    period: "2023 – 2024",
  },
];

const interests = [
  {
    icon: <Code size={30} />,
    title: "Clean Code",
    desc: "I love writing structured, maintainable, and scalable code — simplicity is power.",
  },
  {
    icon: <Monitor size={30} />,
    title: "Tech Exploration",
    desc: "Always experimenting with emerging frameworks, APIs, and dev tools.",
  },
  {
    icon: <Palette size={30} />,
    title: "Design & Aesthetics",
    desc: "Enjoy blending design and development to build visually balanced interfaces.",
  },
  {
    icon: <Users size={30} />,
    title: "Collaboration",
    desc: "I thrive in team environments and value good communication and feedback loops.",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* 👤 Intro */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Ryan
            </span>{" "}
            — a passionate web and software developer focused on creating clean,
            responsive, and meaningful digital experiences. I love solving
            complex problems through modern technologies and thoughtful design.
          </p>
          <Motion.a
            href="/Resume.pdf"
            download
            className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </Motion.a>
        </Motion.div>

        {/* 💼 Experience Section */}
        <Motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <Motion.div
                key={i}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition relative"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.desc}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* 🧠 Skills */}
        <Motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">
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

        {/* 🎓 Education Timeline */}
        <Motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Education</h3>
          <div className="relative border-l-4 border-blue-600 dark:border-blue-500 pl-6 space-y-10">
            {education.map((edu, i) => (
              <Motion.div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition relative"
                whileHover={{ scale: 1.02 }}
              >
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

        {/* 💡 Interests */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">What Drives Me</h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((item, i) => (
              <Motion.div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition text-center"
                whileHover={{ y: -6 }}
              >
                <div className="flex justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
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
