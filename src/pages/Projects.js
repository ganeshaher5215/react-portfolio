import React from 'react';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}
