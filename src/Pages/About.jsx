import React from "react";
import { FaReact, FaNodeJs, FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
  SiBootstrap, SiRedux, SiFigma, SiExpress,
} from "react-icons/si";
import { FaShoppingBag, FaBrain, FaBuilding } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";


const Highlight = ({ children }) => (
  <span className="text-[#58a6ff] font-semibold">{children}</span>
);

const About = () => {
  return (
    <section className="bg-[#0d1117] text-[#c9d1d9] px-6 py-14 md:px-20 lg:px-32">
      {/* Greeting Header */}
      <h1 className="text-center text-4xl md:text-5xl font-bold font-mono mb-6 bg-gradient-to-r from-[#8b5cf6] via-[#58a6ff] to-[#f472b6] text-transparent bg-clip-text animate-fade-in-down">
        👋 Hi, I’m @Mansi-Unge
      </h1>

      {/* Introduction */}
      <p className="text-center text-gray-400 text-base md:text-lg font-mono max-w-3xl mx-auto leading-relaxed animate-fade-in mb-6">
        I’m <Highlight>Mansi Unge</Highlight>, a passionate <Highlight>UI/UX Designer</Highlight>, <Highlight>Frontend Developer</Highlight>, and <Highlight>Full Stack Developer</Highlight> crafting digital experiences that blend function with elegance. I currently intern as a Jr. Developer at <Highlight>PRYM Aerospace Pvt. Ltd</Highlight> while pursuing my studies. 
      </p>
      <div className="mt-12 mb-10 space-y-4 max-w-4xl text-center mx-auto animate-fade-in-up text-sm md:text-base text-gray-400 font-mono">
        <p> Built solutions across domains — from <Highlight>e-commerce stores</Highlight> to a <Highlight>real-time drone tracker</Highlight>.</p>
        <p> Creativity extends beyond code — I dance to stay inspired and energize my ideas.</p>
        <p> Constantly evolving — exploring cloud, APIs, and full-stack excellence.</p>
      </div>
    

      {/* Skill Sections */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-sm font-mono">
        <SkillGroup title="🖌️ UI/UX Design" skills={[
          "Wireframing", "Prototyping", "Figma", "Canva", "Responsive Design", "Accessibility"
        ]} />

        <SkillGroup title="🌐 Frontend" skills={[
          "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Redux"
        ]} icons={{
          HTML5: <SiHtml5 className="text-orange-500" />,
          CSS3: <SiCss3 className="text-blue-400" />,
          JavaScript: <SiJavascript className="text-yellow-300" />,
          "React.js": <FaReact className="text-cyan-400" />,
          "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
          Bootstrap: <SiBootstrap className="text-violet-500" />,
          Redux: <SiRedux className="text-purple-500" />,
        }} />

        <SkillGroup title="⚙️ Backend & APIs" skills={[
          "Node.js", "Express.js", "REST APIs", "JWT", "OAuth"
        ]} icons={{
          "Node.js": <FaNodeJs className="text-green-500" />,
          "Express.js": <SiExpress className="text-gray-300" />,
        }} />

        <SkillGroup title="🛠️ Database" skills={[
          "MongoDB", "MySQL"
        ]} icons={{
          MongoDB: <SiMongodb className="text-emerald-400" />,
          MySQL: <SiMysql className="text-blue-500" />
        }} />

        <SkillGroup title="📦 Version Control" skills={[
          "Git", "GitHub", "Trello", "Jira"
        ]} icons={{
          Git: <FaGitAlt className="text-orange-400" />,
          GitHub: <FaGithub className="text-white" />
        }} />

        <SkillGroup title="🧪 Dev Tools" skills={[
          "VS Code", "Postman", "Thunder Client"
        ]} />
      </div>
  
      <div className="max-w-4xl mx-auto mb-10 animate-fade-in-up">
        <h3 className="text-2xl font-semibold text-[#58a6ff] font-mono border-b border-[#30363d] pb-2 mb-4">
          Notable Projects
        </h3>
        <ul className="space-y-3 text-sm text-gray-400 font-mono">
          {/* <li className="flex items-start gap-2">
            <FaShoppingBag className="text-pink-400 mt-1" />
            <span><Highlight>Maharashtrian Jewelry Store</Highlight> – Built full e-commerce site with user auth and cart functionality.</span>
          </li> */}
          <li className="flex items-start gap-2">
            <MdAirplanemodeActive className="text-teal-400 mt-1" />
            <span><Highlight>Shakti Drone Tracker</Highlight> – Visualized real-time drone telemetry with React and API integration during internship at PRYM.</span>
          </li>
          <li className="flex items-start gap-2">
            <FaBrain className="text-purple-400 mt-1" />
            <span><Highlight>CrackItDev</Highlight> – Full-stack interview prep platform with coding challenges, MCQs, filterable sections, points, and badge systems using MERN stack.</span>
          </li>
          <li className="flex items-start gap-2">
            <FaBuilding className="text-yellow-400 mt-1" />
            <span><Highlight>Ashiyana Real Estate App</Highlight> – Designed a real estate listing platform with property filtering, map view, and user authentication using React and Node.js.</span>
          </li>
        </ul>
      </div>



      {/* Learning & Collab */}
      <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
        <h3 className="text-2xl font-semibold text-[#58a6ff] font-mono border-b border-[#30363d] pb-2 mb-4">
         Currently Exploring
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-400 space-y-2 font-mono">
          <li>Advanced MERN stack architecture</li>
          <li>Cloud integrations & scalable API systems</li>
          <li>Open-source collaboration & UI/UX driven products</li>
        </ul>
      </div>

      {/* Contact & Fun */}
      <div className="text-center animate-fade-in-up">
        <p className="text-sm md:text-base font-mono text-gray-400 mb-2"> Reach out: <a href="mailto:mansiunge@gmail.com" className="text-[#58a6ff] hover:underline">mansiunge@gmail.com</a></p>
        <p className="text-sm md:text-base font-mono text-gray-400 mb-6">🔗 LinkedIn: <a href="https://linkedin.com/in/mansi-unge-8825ba312" target="_blank" className="text-[#58a6ff] hover:underline">linkedin.com/in/mansi-unge</a></p>
        <p className="text-md md:text-base font-mono text-gray-400 mt-2">Fun fact: When I’m not coding, I’m dancing my way to creative breakthroughs!</p>
      </div>
    </section>
  );
};

const SkillGroup = ({ title, skills, icons = {} }) => (
  <div className="bg-[#161b22]/70 backdrop-blur rounded-xl p-5 border border-[#30363d] hover:border-[#58a6ff]/60 transition-all group">
    <h4 className="text-lg font-semibold text-[#58a6ff] mb-3 font-mono border-b border-[#30363d] pb-1">
      {title}
    </h4>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          className="flex items-center gap-2 px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-full text-sm text-[#c9d1d9] font-mono hover:bg-[#21262d] hover:scale-105 transition-transform"
        >
          {icons[skill] && <span>{icons[skill]}</span>}
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
