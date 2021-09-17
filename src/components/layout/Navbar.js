import React from "react";
import { NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          Planner
        </NavLink>
        {/*<SignedInLinks />*/}
        <SignedOutLinks />
      </div>
    </nav>
  );
}

export default Navbar;
