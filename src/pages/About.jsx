import React from "react";

const skills = [
  "React", "TailwindCSS", "JavaScript", "TypeScript",
  "Node.js", "Express", "MongoDB", "Firebase",
  "Git & GitHub", "REST APIs", "Figma", "Vite"
];

const education = [
  {
    school: "Kitengela International Schools",
    degree: "High School Diploma",
    period: "2018 – 2022",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-12">
          <img
            src="/profile.jpg" // place your photo inside /public
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hi, I’m Ryan — a passionate frontend developer who loves turning ideas into 
            interactive and visually appealing web experiences. I specialize in building 
            responsive, user-friendly interfaces with React, TailwindCSS, and modern JavaScript. 
            My goal is to create products that not only look good but also provide seamless usability.
          </p>
          <a
            href="/Resume.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
