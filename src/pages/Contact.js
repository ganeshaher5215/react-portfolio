import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Contact Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📞 Contact Me
      </motion.h2>

      {/* Social Icons */}
      <motion.div
        className="contact-icons"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for contacting me! 🚀");
        }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </motion.form>
    </section>
  );
}
