// src/pages/ProjectsPage.jsx
import React, { useState } from "react";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { HiOutlineViewGrid } from "react-icons/hi";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import projects from "../components/Projects";

const iconMap = {
  React: <FaReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-emerald-400" />,
  Figma: <FaFigma className="text-pink-400" />,
};

const categories = [
  { name: "All", icon: <HiOutlineViewGrid /> },
  { name: "Frontend", icon: <FaReact /> },
  { name: "Full Stack", icon: <FaNodeJs /> },
  { name: "UI/UX Design", icon: <FaFigma /> },
];

const ProjectCard = ({ title, description, tech, image, live, code, type, badge }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
      <div className="group relative bg-[#161b22]/80 backdrop-blur-md rounded-xl border border-[#30363d] overflow-hidden hover:border-[#58a6ff]/60 shadow transition-all duration-300">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
        <span className="absolute top-3 left-3 text-[10px] bg-[#1f6feb] text-white px-2 py-1 rounded uppercase font-mono tracking-wider shadow">
          {type}
        </span>
        {badge && (
          <span className="absolute top-3 right-3 text-[10px] bg-yellow-500 text-black px-2 py-1 rounded uppercase font-mono tracking-wider shadow">
            {badge}
          </span>
        )}
        <div className="p-5">
          <h3 className="text-xl font-bold text-[#f0f6fc] mb-2">{title}</h3>
          <p className="text-sm text-[#adb5bd] mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            {tech?.map((t, i) => (
              <span
                key={i}
                className="text-xs font-mono bg-[#161b22] border border-[#30363d] text-[#58a6ff] px-2 py-1 rounded-full flex items-center gap-1"
              >
                {iconMap[t] || null} {t}
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
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.type === activeCategory);

  return (
    <section className="bg-[#0d1117] min-h-screen text-[#c9d1d9] px-6 py-10 md:px-20 lg:px-32 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#8b5cf6] bg-clip-text text-transparent">
          🚀 My Portfolio Projects
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-3 font-mono max-w-xl mx-auto">
          Full-stack apps, frontend concepts & award-winning UI prototypes
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-3 mb-10 scrollbar-hide justify-center">
        {categories.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setActiveCategory(name)}
            aria-label={`Filter projects by ${name}`}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full border transition duration-200 shadow-sm ${
              activeCategory === name
                ? "bg-[#1f6feb] text-white"
                : "border-[#30363d] text-gray-400 hover:bg-[#21262d]"
            }`}
          >
            {icon} {name}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
