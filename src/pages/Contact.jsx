import React, { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ use this

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Correct environment variable usage
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000); // ✅ auto-hide message
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again later.");
      })
      .finally(() => setLoading(false));
  };


  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s Work Together
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you’re looking to build something new, collaborate on an idea,
          or just say hi — I’d love to hear from you. Let’s create something
          amazing.
        </p>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-700/60 backdrop-blur-sm relative overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-600/10 to-transparent blur-3xl opacity-30"></div>

          <form onSubmit={handleSubmit} className="space-y-8 text-left relative z-10">
            <div>
              <label className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-xl text-lg shadow-lg transition-all duration-300 ${loading
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-400 text-center mt-4 font-medium">
                🎉 Thanks for reaching out! I’ll respond soon.
              </p>
            )}
          </form>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 gap-9 max-w-3xl mx-auto mt-20">
          {/* Socials Card */}
          <div className="flex flex-col items-center justify-center text-center px-10 py-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl border border-gray-700/60 hover:shadow-blue-700/20 transition-all duration-500 group">
            <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
              Find Me Online
            </h3>

            <div className="flex items-center justify-center gap-8">
              <a
                href="https://github.com/Raytay1234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
              >
                <Github className="w-6 h-6 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/ryan-mugi-6b836a37a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>

              <a
                href="https://www.instagram.com/ryguydev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 rounded-full hover:bg-pink-500 transition-all duration-300 shadow-md hover:shadow-pink-400/40"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>



        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          Prefer a quick chat? Reach out via{" "}
          <span className="text-blue-400">LinkedIn</span> or{" "}
          <span className="text-blue-400">Instagram</span> — I’ll get back ASAP.
        </p>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
};

export default Contact;
