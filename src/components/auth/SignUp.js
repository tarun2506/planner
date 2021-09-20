import React, { useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

function SignUp({ user, signUp, authError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password, lastName, firstName });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "firstname":
        return setFirstName(e.target.value);
      case "lastname":
        return setLastName(e.target.value);
      default:
        return null;
    }
  };
  if (user) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h3 className="black-text">Sign Up</h3>
        <div className="input-field">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            id="email"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            id="password"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={firstName}
            id="firstname"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={lastName}
            id="lastname"
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn button z-depth-0">
            Sign up
          </button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
