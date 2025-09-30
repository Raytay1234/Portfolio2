import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6">Let’s work together! Reach me at:</p>
        <a
          href="mailto:your@email"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
