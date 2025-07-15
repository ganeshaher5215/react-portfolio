import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 👇 Custom scroll function with offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this if your Navbar height is different
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Ganesh</span> Aher
        </div>

        <div
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" });
               setIsOpen(false);  }}>
                  Home
             </li>
         <li onClick={() => scrollToSection("about")}>About</li>
<li onClick={() => scrollToSection("skills")}>Skills</li>
<li onClick={() => scrollToSection("projects")}>Projects</li>
<li onClick={() => scrollToSection("education")}>Education</li>
<li onClick={() => scrollToSection("certifications")}>Certifications</li>
<li onClick={() => scrollToSection("contact")}>Contact</li>

        </ul>
      </div>
    </motion.nav>
  );
}
