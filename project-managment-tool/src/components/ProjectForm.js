import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project "${projectName}" added!`);
    navigate("/projects");
  };

  return (
    <div className="content">
      <h2>Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
