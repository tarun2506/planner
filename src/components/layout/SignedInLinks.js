import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function SignedInLinks() {
  const profileInfo = useSelector((state) => state.profile.profileInfo);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul className="right">
      <li>
        <NavLink className="link" to="/create">
          New Project
        </NavLink>
      </li>
      <li>
        <a className="link" onClick={() => dispatch(signOut())}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating profile">
          {profileInfo ? profileInfo.initials : "U"}
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
