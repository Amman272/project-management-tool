import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="header">
      <h1>Project Manager</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/add-project">Add Project</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
