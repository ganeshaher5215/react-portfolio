import React from 'react';
import projects from '../data/projects';
import './Projects.css'; // (Optional) Add styling here

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>📂 My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
