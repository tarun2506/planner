import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <h5 className="grey-text text-darken-3 ">Sign In</h5>
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
        </div>
      </form>
    </div>
  );
}

export default SignIn;
