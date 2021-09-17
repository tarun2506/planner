import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="section project-list">
      {projects &&
        projects.map((project) => {
          return (
            <ProjectSummary
              title={project.title}
              key={project.id}
              content={project.content}
              date={project.date}
            />
          );
        })}
    </div>
  );
}

export default ProjectList;
