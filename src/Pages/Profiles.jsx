import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaCode,
  FaCertificate,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiDevdotto,
  SiHashnode,
  SiCodechef,
} from "react-icons/si";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const profiles = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-4xl" />,
    url: "https://github.com/Mansi-unge",
    username: "@Mansi-unge",
    bgStart: "#161b22",
    bgEnd: "#0d1117",
    glow: "rgba(255,255,255,0.1)",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-white text-4xl" />,
    url: "https://linkedin.com/in/mansi-unge-8825ba312",
    username: "Mansi Unge",
    bgStart: "#0077B5",
    bgEnd: "#004182",
    glow: "rgba(10,102,194,0.4)",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-[#FFA116] text-4xl" />,
    url: "https://leetcode.com/u/MansiUnge/",
    username: "mansiunge",
    bgStart: "#2d2d2d",
    bgEnd: "#1a1a1a",
     glow: "rgba(255,161,22,0.15)",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank className="text-white text-4xl" />,
    url: "https://www.hackerrank.com/profile/ungemansi143",
    username: "mansiunge",
    bgStart: "#1ba94c",
    bgEnd: "#107c3a",
    glow: "rgba(27,169,76,0.4)",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-white text-4xl" />,
    url: "https://www.codechef.com/users/mansi_unge",
    username: "@mansiunge",
    bgStart: "#4b2e05",
    bgEnd: "#7b4f1d",
    glow: "rgba(123,79,29,0.5)",
  },
  {
    name: "Hashnode",
    icon: <SiHashnode className="text-white text-4xl" />,
    url: "https://hashnode.com/@MansiUnge",
    username: "@MansiUnge",
    bgStart: "#2962ff",
    bgEnd: "#0039cb",
    glow: "rgba(41,98,255,0.4)",
  },
];


const certificates = [
  {
    // title: "AWS Cloud Practitioner Essentials",
    // issuedBy: "Amazon Web Services",
    // date: "Aug 2025",
    img: "be10xAItools.jpg", 
  },
  {
    // title: "Full Stack Web Development (MERN)",
    // issuedBy: "Internshala Trainings",
    // date: "July 2025",
    img: "TISS Certificate.jpg",
  },
  {
    // title: "Python for Data Science",
    // issuedBy: "MKCL",
    // date: "June 2025",
    img: "web designing certificate.jpg",
  },
  {
    // title: "Responsive Web Design",
    // issuedBy: "MKCL",
    // date: "April 2025",
    img: "c programming certificate.jpg",
  },
  {
    // title: "Responsive Web Design",
    // issuedBy: "MKCL",
    // date: "April 2025",
    img: "c++  programming certificate.jpg",
  },
];

const Profiles = () => {
  const [current, setCurrent] = useState(0);
  const length = certificates.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0d1117] text-[#c9d1d9] min-h-screen px-6 py-12 md:px-20 lg:px-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#58a6ff] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
          Profiles & Achievements
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-mono max-w-2xl mx-auto">
          Explore my developer profiles and certifications that reflect my
          journey as a lifelong learner and builder.
        </p>
      </motion.div>

      {/* Developer Profiles */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mb-16"
>
  <h2 className="text-2xl font-semibold text-center text-[#58a6ff] font-mono mb-10 tracking-wide">
    Developer Profiles
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {profiles.map((profile, index) => (
      <motion.a
        key={index}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.07, rotate: 1 }}
        className={`relative overflow-hidden group flex flex-col items-center justify-center p-8 rounded-2xl border border-[#30363d] shadow-lg transition-all duration-300`}
        style={{
          background: `linear-gradient(135deg, ${profile.bgStart}, ${profile.bgEnd})`,
          boxShadow: `0 0 25px ${profile.glow}`,
        }}
      >
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>

        <div className="z-10 text-center">
          <div className="flex justify-center mb-3">{profile.icon}</div>
          <h3 className="text-xl font-semibold text-[#f0f6fc] tracking-wide">
            {profile.name}
          </h3>
          <p className="text-sm mt-1 text-gray-300 font-mono">
            {profile.username}
          </p>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#58a6ff]/50 transition-all duration-300"></div>
      </motion.a>
    ))}
  </div>
</motion.div>


      {/* Certificates Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        <h2 className="text-2xl font-semibold text-center text-[#58a6ff] font-mono mb-6 ">
          Certificates
        </h2>

        <div className="relative overflow-hidden ">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center p-6"
            >
              <img
                src={certificates[current].img}
                alt={certificates[current].title}
                className="w-full max-h-[500px] object-contain rounded-lg mb-4"
              />
              {/* <h3 className="text-lg font-semibold text-[#f0f6fc]">
                {certificates[current].title}
              </h3>
              <p className="text-sm text-gray-400">{certificates[current].issuedBy}</p>
              <p className="text-xs text-gray-500">{certificates[current].date}</p> */}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#161b22]/80 hover:bg-[#58a6ff]/20 text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#161b22]/80 hover:bg-[#58a6ff]/20 text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {certificates.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === current ? "bg-[#58a6ff]" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Profiles;
