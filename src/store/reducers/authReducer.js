import firebase from "../../config/FirebaseConfig";

const initState = {
  authError: null,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: firebase.auth().currentUser };
    case "LOGIN_ERROR":
      console.log("login error");
      return { ...state, authError: action.err.message };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return { ...state, authError: null };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return { ...state, authError: null };
    case "SIGNOUT_ERROR":
      console.log("signout error");
      return { ...state, authError: action.err.message };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
