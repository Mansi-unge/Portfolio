import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";

const experience = [
  {
    role: "Jr Full Stack Developer",
    company: "PRYM AEROSPACE PVT LTD",
    location: "Jalna",
    duration: "01/2025 - 05/2025",
    highlights: [
      "Developed scalable web apps using MERN stack.",
      "Integrated real-time drone telemetry with WebSocket & map-based UI.",
      "Crafted responsive, accessible UI using Tailwind CSS.",
      "Reduced frontend load time by 30% through optimization.",
      "Collaborated with Agile team using Git for version control.",
    ],
  },
  {
    role: "Software Intern",
    company: "PRYM AEROSPACE PVT LTD",
    location: "Jalna",
    duration: "10/2024 - 01/2025",
    highlights: [
      "Built interactive dashboards in React.js with live drone data.",
      "Added real-time filtering to improve monitoring by 40%.",
      "Integrated REST and WebSocket APIs with backend.",
      "Ensured mobile-first responsive layouts with Tailwind CSS.",
    ],
  },
];

const ExperienceCard = ({ role, company, location, duration, highlights }) => (
  <div className="relative bg-[#161b22]/70 backdrop-blur-md rounded-xl border border-[#30363d] hover:border-[#58a6ff]/60 hover:shadow-[0_0_15px_#58a6ff33] transition-all p-6 group">
    <div className="flex items-center gap-3 mb-2">
      <FaLaptopCode className="text-[#58a6ff]" />
      <h3 className="text-xl font-bold text-white">{role}</h3>
    </div>

    <div className="text-sm text-[#58a6ff] font-mono mb-3">{company}</div>

    <div className="flex items-center text-gray-400 text-xs mb-4 gap-4 font-mono">
      <span className="flex items-center gap-1">
        <FaMapMarkerAlt className="text-xs" /> {location}
      </span>
      <span className="flex items-center gap-1">
        <FaCalendarAlt className="text-xs" /> {duration}
      </span>
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 font-mono leading-relaxed">
      {highlights.map((point, idx) => (
        <li key={idx} className="relative pl-2 before:content-['▹'] before:absolute before:left-0 before:text-[#8b5cf6]">
          {point}
        </li>
      ))}
    </ul>
  </div>
);


const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-[#0d1117] text-[#c9d1d9] px-6 py-4 md:px-10 lg:px-18 lg:py-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight bg-gradient-to-r from-[#8b5cf6] to-[#58a6ff] bg-clip-text text-transparent">
        Experience
      </h2>
      <p className="text-center text-sm md:text-base text-gray-500 mb-4 lg:mb-8 font-mono">
        From crafting responsive UIs to building real-time systems — here’s what I've worked on.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
