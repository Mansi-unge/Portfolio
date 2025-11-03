import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPage from "./Pages/BlogPage";
import Skills from "./components/Skills";
import Profiles from "./Pages/Profiles";

function App() {
  // Inject Tidio Chatbot Script Once (Global)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/ghowrcwt9zoatjyttge6apx5gtlawo45.js";  // your actual script
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <Skills/>
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={ <BlogPage/> } />
        <Route path="/profiles" element={<Profiles/>} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />
    </Router>
  );
}

export default App;
