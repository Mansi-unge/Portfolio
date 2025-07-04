import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#161b22] text-[#c9d1d9] shadow-sm border-b border-[#30363d] px-6 md:px-20 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-semibold">
        <a href="/" className="sm:inline text-2xl font-mono">
          mansi.dev
        </a>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="sm:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-6 font-mono text-md">
        <a href="/" className="hover:text-white transition hover:underline">Home</a>
        <a href="/about" className="hover:text-white transition hover:underline">About</a>
        <a href="/projects" className="hover:text-white transition hover:underline">Projects</a>
          <a href="/blog" onClick={toggleMenu} className="hover:text-white transition">Blog</a>
        <a href="/contact" className="hover:text-white transition hover:underline">Contact</a>
        <a
          href="https://github.com/Mansi-unge"
          target="_blank"
          className="hover:text-white transition hover:underline"
        >
          GitHub
        </a>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#161b22] py-4 px-4 flex flex-col gap-4 font-mono sm:hidden border-t border-[#30363d]">
          <a href="/" onClick={toggleMenu} className="hover:text-white transition">Home</a>
          <a href="/about" onClick={toggleMenu} className="hover:text-white transition">About</a>
          <a href="/projects" onClick={toggleMenu} className="hover:text-white transition">Projects</a>
           <a href="/blog" onClick={toggleMenu} className="hover:text-white transition">Blog</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-white transition">Contact</a>
          <a
            href="https://github.com/Mansi-unge"
            target="_blank"
            onClick={toggleMenu}
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
