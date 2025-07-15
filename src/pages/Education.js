import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

export default function Education() {
  const blockVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="education-section">
      <h2>🎓 Education</h2>

      <div className="education-blocks">
        {/* 10th Standard */}
        <motion.div
          className="education-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariant}
        >
          <h3>10th Grade</h3>
          <p>Dr. V. V. Patil School, Loni</p>
          <p>🎖️ Grade: 77%</p>
        </motion.div>

        {/* 12th Standard */}
        <motion.div
          className="education-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariant}
        >
          <h3>12th Grade</h3>
          <p>Padmashree Vikhe Patil Vidhyalay, Pravaranagar</p>
        </motion.div>

        {/* Computer Engineering */}
        <motion.div
          className="education-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariant}
        >
          <h3>Computer Engineering (Pursuing)</h3>
          <p>TY - Third Year</p>
          <p>Savitribai Phule Pune University</p>
        </motion.div>
      </div>
    </section>
  );
}
