import React from "react";
import ContactSection from "../components/ContactSection";
import {  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane, } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-4 lg:px-0 py-6 lg:py-12">

      {/* Greeting */}
      <div className="mb-2 lg:mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#8b5cf6] mb-4 tracking-wide">
          Let's Connect ✨
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 italic font-serif text-sm sm:text-base">
          I believe every conversation opens a new door — whether it’s a project, collaboration, or just a hello.
          Drop me a message and let’s build something amazing together!
        </p>
      </div>

      {/* Contact Form */}
      <ContactSection />

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/mansi-unge-8825ba312"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8b5cf6] hover:text-[#58a6ff] transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Mansi-unge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8b5cf6] hover:text-[#58a6ff] transition-transform transform hover:scale-110"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://instagram.com/mansi_unge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8b5cf6] hover:text-[#58a6ff] transition-transform transform hover:scale-110"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://t.me/Mansi_Unge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8b5cf6] hover:text-[#58a6ff] transition-transform transform hover:scale-110"
        >
          <FaTelegramPlane size={30} />
        </a>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">
        Find me around the web
      </p>
    </main>
  );
};

export default Contact;
