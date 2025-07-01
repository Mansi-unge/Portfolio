import React from "react";
import ContactSection from "../components/ContactSection";
import {  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane, } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-[#0d1117] text-[#c9d1d9] px-4 lg:px-0 py-6 lg:py-8">
      {/* Contact Form */}
      <ContactSection />
    </main>
  );
};

export default Contact;
