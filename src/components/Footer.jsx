import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-[#c9d1d9] border-t border-[#30363d] px-6 md:px-20 lg:px-32 py-10 pb-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Left - Text */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-[#8b5cf6] to-[#58a6ff] bg-clip-text text-transparent">
            Built with 💙 by Mansi Unge
          </h3>
          <p className="text-sm text-gray-500 font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a
            href="https://github.com/Mansi-unge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mansi-unge-8825ba312"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0077b5] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919359431750"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-[#25D366] transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/mansi_unge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#E1306C] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/mansiunge60256"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#1DA1F2] transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:mansiunge@gmail.com"
            aria-label="Email"
            className="hover:text-[#58a6ff] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
