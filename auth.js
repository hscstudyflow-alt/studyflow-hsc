// auth.js
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Google Login
window.googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  alert("Google Login Successful");
};

// Email Signup
window.emailSignup = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  await createUserWithEmailAndPassword(auth, email, pass);
  alert("Signup Successful");
};

// Email Login
window.emailLogin = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  await signInWithEmailAndPassword(auth, email, pass);
  alert("Login Successful");
};

// Logout
window.logout = async () => {
  await signOut(auth);
  alert("Logged Out");
};
