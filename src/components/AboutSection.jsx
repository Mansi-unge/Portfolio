'use client';
import { motion } from 'framer-motion';
import { FiCpu, FiFeather, FiZap, FiUsers } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter'; // npm install react-simple-typewriter

const strengths = [
  {
    title: 'Creative Problem Solver',
    icon: <FiZap size={24} className="text-[#f472b6]" />,
    description:
      'I love breaking down complex problems and building smart, efficient solutions.',
  },
  {
    title: 'Clean & Scalable Code',
    icon: <FiCpu size={24} className="text-[#58a6ff]" />,
    description:
      'Writing code that is both elegant and maintainable is my top priority.',
  },
  {
    title: 'User-First Design',
    icon: <FiFeather size={24} className="text-[#8b5cf6]" />,
    description:
      'Great design is invisible. I craft intuitive experiences that feel effortless to users.',
  },
  {
    title: 'Team Spirit',
    icon: <FiUsers size={24} className="text-green-400" />,
    description:
      'Collaboration and empathy are at the core of how I work — every project is a team effort.',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0d1117] text-[#c9d1d9] px-6 py-12 md:px-20 lg:px-12"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight bg-gradient-to-r from-[#58a6ff] via-[#8b5cf6] to-[#f472b6] bg-clip-text text-transparent font-mono relative"
      >
        About Me
        <span className="block h-[3px] w-16 bg-[#58a6ff] mx-auto mt-3 rounded-full shadow-lg animate-pulse" />
      </motion.h2>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center mx-auto">
        {/* Left Side: Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
           <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-sm md:text-lg text-gray-400 font-mono leading-loose"
        >
          Hey there! I’m{' '}
          <span className="text-[#58a6ff] font-semibold">Mansi Unge</span> — a
          curious mind who codes and creates.
          <br />
          As a{' '}
          <strong className="text-[#58a6ff]">Full Stack Developer</strong> and{' '}
          <strong className="text-[#f472b6]">UI/UX Designer</strong>, I bring
          ideas to life through clean code and meaningful design.
          <br />
          I love solving real-world problems and turning complex ideas into
          beautiful, functional digital products.
          <br />
          <span className="text-[#8b5cf6] font-semibold">
            Always learning. Always building. 
          </span>
        </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-4 flex gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
            href="/Unge_Mansi_Resume.pdf"
            download
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-2 py-1 lg:px-5 lg:py-2 rounded-md font-semibold text-sm transition shadow"
          >
            Download Resume
          </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Strength Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#161b22] rounded-2xl p-6 border border-[#30363d] hover:shadow-[0_0_20px_#8b5cf650] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#21262d] p-2 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-mono">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
