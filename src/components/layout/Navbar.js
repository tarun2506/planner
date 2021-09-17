import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          Planner
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
