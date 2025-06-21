import React from "react";
import { FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiFigma,
  SiC,
  SiCplusplus,
  SiExpress,
  SiGithub,
} from "react-icons/si";

const techStack = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-violet-500" /> },
      { name: "UI/UX", icon: <SiFigma className="text-pink-400" /> },
      { name: "Responsive Design" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "REST APIs" },
      { name: "Websockets" },
      { name: "Authentication (JWT, OAuth)" },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "Version Control & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-300" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "Core Java", icon: <FaJava className="text-red-400" /> },
    ],
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#0d1117] text-[#c9d1d9] px-6 py-6 md:px-20 lg:px-14 lg:py-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 lg:mb-6 tracking-tight bg-gradient-to-r from-[#58a6ff] via-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent font-mono">
        About Me
      </h2>
      <p className="text-center text-sm md:text-base text-gray-400 mb-8 lg:mb-12 max-w-3xl mx-auto font-mono leading-relaxed">
  Hey there! I’m <span className="text-[#58a6ff] font-semibold">Mansi Unge</span> — a curious mind who codes and creates.  
  As a <strong>Full Stack Developer</strong> and <strong>UI/UX Designer</strong>, I bring ideas to life with clean code and thoughtful design.  
  Whether it’s crafting smooth interfaces, designing intuitive user journeys, or building powerful backend logic — I love solving problems and building things that just work.  
  Always learning. Always creating.
</p>


      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-full mx-auto">
        {techStack.map((group, idx) => (
          <div
            key={idx}
            className="bg-[#161b22]/70 backdrop-blur-md rounded-xl p-6 border border-[#30363d] hover:border-[#58a6ff]/60 hover:shadow-[0_0_15px_#58a6ff33] transition-all"
          >
            <h3 className="text-lg font-semibold text-[#58a6ff] mb-4 border-b border-[#30363d] pb-2 font-mono">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#0d1117] border border-[#30363d] rounded-full text-sm font-mono text-[#c9d1d9] hover:bg-[#161b22]/80 transition"
                >
                  {skill.icon && (
                    <span className="text-base">{skill.icon}</span>
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
