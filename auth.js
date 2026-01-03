// auth.js
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ---------- Google Login ----------
window.googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  alert("Google Login Successful");
};

// ---------- Email Signup ----------
window.emailSignup = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  await createUserWithEmailAndPassword(auth, email, pass);
  alert("Signup Successful");
};

// ---------- Email Login ----------
window.emailLogin = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  await signInWithEmailAndPassword(auth, email, pass);
  alert("Login Successful");
};

// ---------- Logout ----------
window.logout = async () => {
  await signOut(auth);
  alert("Logged Out");
};

// ---------- Phone OTP Setup ----------
window.recaptchaVerifier = new RecaptchaVerifier(
  "recaptcha-container",
  { size: "normal" },
  auth
);

// ---------- Send OTP ----------
window.sendOTP = async () => {
  const phone = document.getElementById("phone").value;
  window.confirmationResult = await signInWithPhoneNumber(
    auth,
    phone,
    window.recaptchaVerifier
  );
  alert("OTP Sent");
};

// ---------- Verify OTP ----------
window.verifyOTP = async () => {
  const code = document.getElementById("otp").value;
  await window.confirmationResult.confirm(code);
  alert("Phone Login Successful");
};
