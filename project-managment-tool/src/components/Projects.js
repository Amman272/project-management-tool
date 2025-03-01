import React, { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign" },
    { id: 2, name: "Mobile App Development" },
  ]);

  return (
    <div className="content">
      <h2>Your Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
