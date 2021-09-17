import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink className="link" to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/signin">
          Login
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLinks;
