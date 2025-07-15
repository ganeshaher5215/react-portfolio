import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>🛠 My Skills</h2>
      <p>
        Here are some of the technologies and tools I excel in:
      </p>
      <div className="skills-icons">
        <span>☕ Java</span>
        <span>⚡ C++</span>
        <span>🌐 React</span>
        <span>🗄️ SQL</span>
        <span>📱 HTML/CSS</span>
      </div>
    </section>
  );
}
