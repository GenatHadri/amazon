import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTWY9t5Jsm2C_omIuAfWBRkvAxPoWRcwE",
  authDomain: "clone-17838.firebaseapp.com",
  projectId: "clone-17838",
  storageBucket: "clone-17838.appspot.com",
  messagingSenderId: "917216516306",
  appId: "1:917216516306:web:8cc48b066fe0203de4b50b",
  measurementId: "G-41XTFPH2YL",
});

const auth = firebase.auth();

export { auth };
