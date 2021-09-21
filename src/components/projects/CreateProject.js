import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router";

function CreateProject({ history }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject({ title, content }));
    setTitle("");
    setContent("");
    history.push("/");
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
  return user ? (
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
  ) : (
    <Redirect to="/signin" />
  );
}

export default CreateProject;
