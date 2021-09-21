import React from "react";
import { useSelector } from "react-redux";
function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-titlee">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">date</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
