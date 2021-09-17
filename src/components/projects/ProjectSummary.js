import React from "react";

function ProjectSummary({ title, description, date }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{description}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
