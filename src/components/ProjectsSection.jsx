import React from "react";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import projects from "./Projects";

const iconMap = {
  React: <FaReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-emerald-400" />,
  Figma: <FaFigma className="text-pink-400" />,
};

const ProjectCard = ({ title, description, tech, image, live, code, type }) => (
  <div className="bg-[#161b22]/70 backdrop-blur-md rounded-xl border border-[#30363d] hover:border-[#58a6ff]/60 hover:shadow-[0_0_15px_#58a6ff33] transition-all duration-300 group">
    <div className="relative">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-52 object-cover grayscale group-hover:grayscale-0 transition rounded-t-xl"
      />
      <span className="absolute top-3 left-3 text-[10px] bg-[#1f6feb] text-white px-2 py-1 rounded uppercase font-mono tracking-wider shadow">
        {type}
      </span>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-[#f0f6fc] mb-2">{title}</h3>
      <p className="text-sm text-[#adb5bd] mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        {tech?.map((t, i) => (
          <span
            key={i}
            className="text-xs font-mono bg-[#161b22] border border-[#30363d] text-[#58a6ff] px-2 py-1 rounded-full flex items-center gap-1"
          >
            {iconMap[t] || null}
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-1.5 rounded-md transition shadow"
          >
            Live Demo
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold border border-[#30363d] hover:bg-[#21262d] px-4 py-1.5 rounded-md transition"
          >
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const topThreeProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="bg-[#0d1117] text-[#c9d1d9] px-6 py-4 md:px-20 lg:px-32 lg:py-10 relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#8b5cf6] bg-clip-text text-transparent">
        My Work & Creations
      </h2>
      <p className="text-center text-sm md:text-base text-gray-400 mb-6 font-mono">
        Explore my best UI designs, full-stack apps, and frontend builds
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-6 rounded-xl">
        {topThreeProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="/projects" // Change to actual route if needed
          className="text-sm font-semibold bg-[#1f6feb] hover:bg-[#388bfd] text-white px-6 py-2 rounded-full transition"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
