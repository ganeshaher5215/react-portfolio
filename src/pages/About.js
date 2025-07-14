import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profilePic from "../assets/profile-placeholder.jpg";

export default function About() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-container">
      {/* Introduction */}
      <motion.div
        className="intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hello! 👋 I’m Ganesh</h1>
        <p>
          I’m a passionate <strong>Computer Engineering student</strong> in my
          3rd year with a deep interest in Java development and web
          technologies. I enjoy building applications that solve real-world
          problems and exploring modern tools to create impactful solutions.
        </p>
      </motion.div>

      {/* What I Do */}
      <motion.section
        className="what-i-do"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>🎯 What I Do</h2>
        <p>
          I specialize in Java and C++ programming and have experience creating
          dynamic websites using React and modern web technologies. Alongside
          my technical work, I’m currently preparing for placement interviews
          and aiming to grow as a professional developer.
        </p>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        className="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>🛠 Technical Skills</h2>
        <p>
          Here are some of the technologies and tools I work with:
        </p>
        <div className="skills-icons">
          <span>☕ Java</span>
          <span>⚡ C++</span>
          <span>🌐 React</span>
          <span>🗄️ SQL</span>
          <span>📱 HTML/CSS</span>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        className="certifications"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>📜 Certifications & Achievements</h2>
        <p>
          I’m certified in Japanese Language Proficiency (JLPT N5) and currently
          preparing for N3. I have developed projects like an IoT-based Smart
          Irrigation System and a Rainwater Collection Monitoring System using
          Arduino and sensors.
        </p>
      </motion.section>

      {/* Career Goals */}
      <motion.section
        className="career-goals"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>🌏 Career Goals</h2>
        <p>
          My goal is to secure a position as a Java Developer in a reputed
          organization and gain international exposure through programs like the
          <strong> METI Japan Internship</strong>. I’m driven to constantly
          learn, innovate, and contribute to impactful projects globally.
        </p>
      </motion.section>
    </div>
  );
}
