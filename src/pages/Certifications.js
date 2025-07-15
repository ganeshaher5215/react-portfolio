import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2>📜 Certifications & Achievements</h2>
      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="certifications-list"
      >
        <li>JLPT N5 Certified</li>
        <li>JLPT N4 Certified</li>
        <li>IoT-based Smart Irrigation System</li>
      </motion.ul>
    </section>
  );
}
