import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3 ">Sign Up</h5>
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
          <button type="submit" className="btn red lighten-1 z-depth-0">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
