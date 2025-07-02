// ContactSection.jsx
import React, { useRef } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ContactSection = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formRef.current["name"].value;
    const email = formRef.current["email"].value;
    const message = formRef.current["message"].value;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("✅ Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0d1117] text-[#c9d1d9] px-6 sm:px-10 md:px-20 lg:px-32 pt-4 pb-12 lg:py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Contact Info */}
        <div className="space-y-2 text-sm sm:text-base font-mono mb-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left mb-4 tracking-tight bg-gradient-to-r from-[#f472b6] via-[#8b5cf6] to-[#58a6ff] bg-clip-text text-transparent animate-pulse">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 mb-6 text-center md:text-left italic font-serif text-sm">
            I believe every conversation opens a new door — whether it’s a project, collaboration, or just a hello. Drop me a message and let’s build something amazing together!
          </p>
          <div className="flex items-center gap-3 break-all">
            <FaEnvelope className="text-[#8b5cf6]" />
            <a href="mailto:mansiunge@gmail.com" className="hover:text-[#58a6ff] transition">mansiunge@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#8b5cf6]" />
            <a href="tel:+919359431750" className="hover:text-[#58a6ff] transition">+91 9359431750</a>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-[#25D366]" />
            <a href="https://wa.me/919359431750" target="_blank" rel="noopener noreferrer" className="hover:text-[#58a6ff] transition">Message on WhatsApp</a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#161b22]/70 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-[#30363d] hover:shadow-[0_0_20px_#58a6ff44] transition-all relative overflow-hidden w-full"
        >
          <div className="absolute -inset-px rounded-2xl z-[-1] bg-gradient-to-br from-[#8b5cf6] to-[#58a6ff] opacity-0 hover:opacity-10 blur-lg transition-all duration-300" />

          {/* Name */}
          <div className="flex items-center bg-[#0d1117] border border-[#30363d] px-4 py-2 mb-4 rounded-md text-sm focus-within:border-[#8b5cf6]">
            <FaUser className="text-[#58a6ff] mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-transparent focus:outline-none text-gray-300 w-full"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-[#0d1117] border border-[#30363d] px-4 py-2 mb-4 rounded-md text-sm focus-within:border-[#8b5cf6]">
            <FaEnvelope className="text-[#58a6ff] mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-transparent focus:outline-none text-gray-300 w-full"
            />
          </div>

          {/* Message */}
          <div className="flex items-start bg-[#0d1117] border border-[#30363d] px-4 py-2 mb-6 rounded-md text-sm focus-within:border-[#8b5cf6]">
            <FaCommentDots className="text-[#58a6ff] mt-1 mr-3" />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-transparent focus:outline-none text-gray-300 w-full resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#8b5cf6] text-white font-semibold text-sm py-2.5 rounded-md shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
