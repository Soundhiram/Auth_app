import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider, GithubAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIM1xY_5NtwXUr-c3TisNocWfRyleXt4U",
  authDomain: "authapp-d3b17.firebaseapp.com",
  projectId: "authapp-d3b17",
  storageBucket: "authapp-d3b17.appspot.com",
  messagingSenderId: "277744338391",
  appId: "1:277744338391:web:6a40d39cbbcc9cb9fbf792",
  measurementId: "G-R27T3E5WLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export {auth,googleProvider, facebookProvider, githubProvider,app}