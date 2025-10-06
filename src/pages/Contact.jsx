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
        <div className="max-w-3xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-lg transition-all duration-200 ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-500 text-center mt-4">
                Thanks for reaching out! I’ll respond soon.
              </p>
            )}
          </form>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16 mt-16">
          

          {/* Socials Card */}
          <div className="flex flex-col items-center gap-4 px-8 py-10 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Find Me Online</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/Raytay1234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-mugi-6b836a37a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ryguydev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Instagram className="w-6 h-6" />
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
