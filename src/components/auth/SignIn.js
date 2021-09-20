import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

function SignIn({ signIn, authError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
    setEmail("");
    setPassword("");
  };
  const handleChange = (e) => {
    switch (e.target.type) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h3 className="black-text">Sign In</h3>
        <div className="input-field">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn button z-depth-0">
            Login
          </button>
          <div className="red-text center">
            {authError ? <p>{authError} </p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
