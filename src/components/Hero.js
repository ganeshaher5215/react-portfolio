import React from "react";
import "./Hero.css";

export default function Hero({ name, tagline, profileImage }) {
  return (
    <div className="hero">
      <img src={profileImage} alt={name} className="hero-pic" />
      <h1>Hello 👋, I’m <span>{name}</span></h1>
      <p>{tagline}</p>
      <div className="hero-buttons">
        <a href="/projects" className="btn">View Projects</a>
        <a href="/contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  );
}
