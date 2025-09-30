import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-black text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Ryan 👋</h1>
      <p className="text-xl mb-6">A passionate Web Developer</p>
      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200 transition"
        >
          View My Work
        </a>
        <a
          href="/Resume.pdf"
          download
          className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
