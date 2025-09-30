import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Ryan 👋</h1>
      <p className="text-xl mb-6">A passionate Web Developer</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
