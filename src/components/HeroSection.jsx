import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef();
  const [typedCode, setTypedCode] = useState("");
  const codeSnippet = `
  const mansi = {
    name: "Mansi Unge",
    role: "Full Stack Developer & UI/UX Designer",
    skills: ["React", "Node.js", "MongoDB", "Figma"],
    portfolio: "Bringing ideas to life with code & design.",
    openToWork: true
  };`;

  useEffect(() => {
    gsap.set(".fade-in", { opacity: 0, y: 30 });
    gsap.to(".fade-in", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setTypedCode((prev) => prev + codeSnippet[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0d1117] text-[#c9d1d9] flex flex-col lg:flex-row items-center justify-center py-4 lg:pt-12 lg:pb-10 px-4 sm:px-10 md:px-16 lg:px-32 relative overflow-hidden"
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left fade-in">
        {/* Avatar */}
        <div className="relative mb-6 group rounded-2xl">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-62 lg:h-62 relative overflow-hidden border-4 border-[#38bdf8] shadow-[0_0_30px_#38bdf875] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 rounded-full">
            <img
              src="/mansi_unge.png"
              alt="Mansi Avatar"
              className="object-cover w-full h-full rounded-full "
            />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Mansi Unge
        </h1>

        <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
          <span className="text-xs sm:text-sm font-mono bg-[#facc15]/10 text-[#facc15] px-2 py-1 rounded-full">
            Full Stack Dev
          </span>
          <span className="text-xs sm:text-sm font-mono bg-[#f472b6]/10 text-[#f472b6] px-2 py-1 rounded-full">
            UI/UX Designer
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-400 font-mono mb-2 leading-relaxed max-w-md px-6 lg:px-0">
          With a developer’s precision and a designer’s eye, I craft digital
          products that are as functional as they are beautiful.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-4 mt-1 justify-center lg:justify-start text-xl sm:text-3xl">
          <a href="https://github.com/Mansi-unge" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mansi-unge-8825ba312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0077b5] transition">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/919359431750" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#25D366] transition">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/mansi_unge" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] transition">
            <FaInstagram />
          </a>
          <a href="https://t.me/Mansi_Unge" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-[#0088cc] transition">
            <FaTelegramPlane />
          </a>
          <a href="https://twitter.com/mansiunge60256" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#1DA1F2] transition">
            <FaTwitter />
          </a>
        </div>


        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-5 justify-center lg:justify-start">
          <a
            href="/Unge_Mansi_Resume.pdf"
            download
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-2 py-1 lg:px-5 lg:py-2 rounded-md font-semibold text-sm transition shadow"
          >
            Download Resume
          </a>
          <a
            href="/projects"
            className="bg-[#238636] hover:bg-[#2ea043] text-white px-2 py-1 lg:px-5 lg:py-2 rounded-md font-semibold text-sm transition shadow"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-[#30363d] hover:bg-[#21262d] px-2 py-1 lg:px-5 lg:py-2 rounded-md text-sm font-semibold transition shadow"
          >
            Connect
          </a>

        </div>

      </div>

      {/* Right Column - Animated Code Block */}
      <div className="w-full lg:w-3/5 mt-10 lg:mt-0 fade-in lg:ms-10">
        <div className="bg-[#272822] border border-[#44475a] rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg relative overflow-x-auto max-w-full">
          {/* Terminal Header */}
          <div className="absolute top-0 left-0 w-full h-10 bg-[#1e1f1c] px-4 flex items-center text-xs sm:text-sm text-[#75715e] border-b border-[#3e3d32] font-mono">
            ~ mansi@portfolio — bash
          </div>

          {/* Code Block */}
          <div className="pt-10 text-xs sm:text-sm md:text-base font-mono">
            <SyntaxHighlighter
              language="javascript"
              style={monokai}
              customStyle={{
                background: "transparent",
                padding: 0,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
              showLineNumbers={false}
            >
              {typedCode}
            </SyntaxHighlighter>
            <span className="absolute bottom-6 left-6 bg-[#f8f8f2] w-[2px] h-5 animate-pulse" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
