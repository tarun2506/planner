import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect, useSelector } from "react-redux";
import { profile } from "../../store/actions/profileActions";
import { useDispatch } from "react-redux";

function Navbar({ user, profileLoader, profile }) {
  const links = user ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper darken-3 z-depth-0">
      <div className="container">
        <Link to="/" className="brand-logo">
          Planner
        </Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    profile: state.profile.profileInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    profileLoader: (userId) => dispatch(profile(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
