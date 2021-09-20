import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  profile: profileReducer,
});

export default rootReducer;
