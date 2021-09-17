import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList() {
  return (
    <div className="section project-list">
      <ProjectSummary
        title="Project title"
        description="Posted by xO"
        date="2nd August, 3pm"
      />
      <ProjectSummary
        title="Project title"
        description="Posted by xO"
        date="2nd August, 3pm"
      />
      <ProjectSummary
        title="Project title"
        description="Posted by xO"
        date="2nd August, 3pm"
      />
    </div>
  );
}

export default ProjectList;
