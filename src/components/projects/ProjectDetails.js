import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router";

function ProjectDetails({ match, project, user }) {
  const id = match.params.id;
  if (!user) return <Redirect to="/signin" />;
  return project ? (
    <div className="container section project-details">
      <div className="card cardd z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action  black-text">
          <div>
            Posted By {project.authorFirstName} {project.authorLastName}
          </div>
          <div>2nd September, 4am</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    user: state.auth.user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
