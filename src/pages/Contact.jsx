import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react"; // using lucide-react icons

const Contact = () => {
  return (
    <section id="contact" className="py-20 ...">
      {/* contact content */}


      <section className="py-20 bg-gray-900 text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let’s connect!
          </p>

          {/* Email CTA */}
          <a
            href="mailto:your@email"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-lg font-medium"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-sm text-gray-500">
            Or drop me a message directly on social media!
          </p>
        </div>
      </section>
    </section>
  );
};

export default Contact;
