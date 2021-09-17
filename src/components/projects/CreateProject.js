import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

function CreateProject({ createProject }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({ title, content });
    setTitle("");
    setContent("");
  };
  const handleChange = (e) => {
    switch (e.target.id) {
      case "title":
        return setTitle(e.target.value);
      case "content":
        return setContent(e.target.value);
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h3 className="black-text">Create Project</h3>
        <div className="input-field">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={handleChange}
            id="title"
          />
        </div>
        <div className="input-field">
          <textarea
            type="text"
            id="content"
            placeholder="Content"
            onChange={handleChange}
            value={content}
            className="materialize-textarea"
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn button z-depth-0">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
