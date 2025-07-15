import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        {/* Footer Logo */}
        <div className="footer-logo">
          <h2>Ganesh Aher</h2>
          <p>Passionate Developer | Java | React | IoT</p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="mailto:ganeshaher5215@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/ganeshaher5215"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ganesh-aher-ガネーシャ・アヘル-ba3abb28b"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/your-leetcode-profile"
            target="_blank"
            rel="noreferrer"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.hackerrank.com/your-hackerrank-profile"
            target="_blank"
            rel="noreferrer"
            title="HackerRank"
          >
            <SiHackerrank />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Ganesh Aher. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
