import React from "react";

function ProjectDetails({ match }) {
  const id = match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, tempora?
          </p>
        </div>
        <div className="card-action  black-text">
          <div>Posted By xO</div>
          <div>2nd September, 4am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
