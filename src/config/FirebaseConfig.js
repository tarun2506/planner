import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGySIynNmDSXlTB7ZLVXCBN2fzRN7S8vQ",
  authDomain: "planner-109ee.firebaseapp.com",
  projectId: "planner-109ee",
  storageBucket: "planner-109ee.appspot.com",
  messagingSenderId: "932656241581",
  appId: "1:932656241581:web:141c8bf2c6ca76e7005f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
