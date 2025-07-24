import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiHashnode } from "react-icons/si";

const dummyBlogs = [
  {
  title: "Introducing CrackIt.dev — Tech Interviews, Cracked the Right Way",
  description:
    "Why I built CrackIt.dev, what it solves for tech interview prep, key features like DSA Corner, company-specific prep, built-in compiler, and what’s coming next.",
  date: "July 3, 2025",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1751553084901/7f1e3f5a-e75b-4876-9fc9-ba69978e26fa.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
  url: "https://mansiunge.hashnode.dev/introducing-crackitdev-tech-interviews-cracked-the-right-way "
},
  {
  title: "From Changing Button Colors to Building Full-Stack Dreams: My MERN Journey (So Far)",
  description:
    "How I went from fearing the backend to embracing full-stack development with the MERN stack — the ups, the bugs, and the breakthroughs along the way.",
  date: "July 9, 2025",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1752043085256/9e06a281-ae2f-40d1-acfa-d213dcaad554.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
  url: "https://mansiunge.hashnode.dev/from-changing-button-colors-to-building-full-stack-dreams-my-mern-journey-so-far"
},
  {
  title: "From Tutorial Hell to Building My Own Projects: My Real Journey (With AI As My Guide)",
  description:
    "Stuck in tutorial hell? Here's how I broke free, stopped mindless learning, and started building real-world projects — with AI guiding me through every roadblock.",
  date: "July 18, 2025",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1752743630197/a517cb08-3dcd-4a15-8473-6b8bcfd52966.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  url: "https://mansiunge.hashnode.dev/from-tutorial-hell-to-building-my-own-projects-my-real-journey-with-ai-as-my-guide"
},
  {
  title: "Why 'Learn Everything First' Is a Lie – And What Actually Works",
  description:
    "Struggling to learn everything before building? You’re not alone. This blog breaks the myth of 'learn first, build later' and offers practical advice for beginners, slow learners, and overwhelmed devs starting their full-stack journey.",
  date: "July 24, 2025",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1753377876062/df3df327-7627-41da-ba0e-3cd79cf1a3fb.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  url: "https://mansiunge.hashnode.dev/why-learn-everything-first-is-a-lie-and-what-actually-works"
}
];

const BlogCard = ({ blog }) => (
  <motion.a
    href={blog.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className="group relative bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#58a6ff]/60 rounded-xl overflow-hidden shadow-md transition-all"
  >
    <img
      src={blog.coverImage}
      alt={blog.title}
      className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition duration-500"
    />
    <div className="p-5">
      <h3 className="text-lg font-bold text-[#f0f6fc] mb-1 group-hover:text-[#58a6ff] transition">
        {blog.title}
      </h3>
      <p className="text-sm text-gray-400 mb-2">{blog.description}</p>
      <span className="text-xs text-gray-500 font-mono">{blog.date}</span>
    </div>
  </motion.a>
);

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace with real Hashnode API call if needed
    setBlogs(dummyBlogs);
  }, []);

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
          My Blog Posts
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-3 font-mono max-w-xl mx-auto">
          Insights on web development, design, and dev tools from my journey.
        </p>
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No blog posts found.</p>
        )}
      </div>

      {/* Footer Link to Hashnode */}
      <div className="text-center mt-4 text-gray-400 flex justify-center items-center gap-2  font-mono">
        View all articles on{" "}
        <a
          href="https://hashnode.com/@MansiUnge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#58a6ff] hover:underline inline-flex text-2xl font-bold items-center gap-2"
        >
          <SiHashnode className="text-[#2962ff]"  /> Hashnode
        </a>
      </div>
    </section>
  );
};

export default BlogPage;
