import React from "react";

function ProjectSummary({ title, content, date }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-titlee">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
