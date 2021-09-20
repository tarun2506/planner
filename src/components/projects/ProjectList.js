import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div className="section project-list">
      {projects &&
        projects.map((project) => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary
                title={project.title}
                content={project.content}
                date={project.date}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default ProjectList;
