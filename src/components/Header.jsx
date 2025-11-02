import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // ✅ to track active route

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation(); // ✅ current path
  const currentPath = location.pathname;

  // Helper to style active link
  const linkClass = (path) =>
    `px-3 py-1 rounded-md transition font-mono ${
      currentPath === path
        ? "bg-gradient-to-r from-[#8b5cf6] to-[#58a6ff] text-white shadow-md"
        : "hover:text-white hover:underline"
    }`;

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
      <nav className="hidden sm:flex gap-6 text-md">
        <a href="/" className={linkClass("/")}>
          Home
        </a>
        <a href="/about" className={linkClass("/about")}>
          About
        </a>
        <a href="/projects" className={linkClass("/projects")}>
          Projects
        </a>
        <a href="/blog" className={linkClass("/blog")}>
          Blog
        </a>
        <a href="/contact" className={linkClass("/contact")}>
          Contact
        </a>
        <a
          href="https://github.com/Mansi-unge"
          target="_blank"
          className="hover:text-white hover:underline"
        >
          <FaGithub className="inline mr-1" /> GitHub
        </a>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#161b22] py-4 px-4 flex flex-col gap-4 font-mono sm:hidden border-t border-[#30363d]">
          <a href="/" onClick={toggleMenu} className={linkClass("/")}>
            Home
          </a>
          <a href="/about" onClick={toggleMenu} className={linkClass("/about")}>
            About
          </a>
          <a
            href="/projects"
            onClick={toggleMenu}
            className={linkClass("/projects")}
          >
            Projects
          </a>
          <a href="/blog" onClick={toggleMenu} className={linkClass("/blog")}>
            Blog
          </a>
          <a href="/contact" onClick={toggleMenu} className={linkClass("/contact")}>
            Contact
          </a>
          <a
            href="https://github.com/Mansi-unge"
            target="_blank"
            onClick={toggleMenu}
            className="hover:text-white hover:underline"
          >
            <FaGithub className="inline mr-1" /> GitHub
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
