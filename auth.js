import { auth } from "./firebase.js";
import {
 GoogleAuthProvider,
 signInWithPopup,
 signInWithEmailAndPassword,
 RecaptchaVerifier,
 signInWithPhoneNumber
} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Google
document.getElementById("googleBtn").onclick = async () => {
 const provider = new GoogleAuthProvider();
 await signInWithPopup(auth, provider);
 alert("Google Login Success");
};

// Email
document.getElementById("emailBtn").onclick = async () => {
 await signInWithEmailAndPassword(
  auth,
  email.value,
  password.value
 );
 alert("Email Login Success");
};

// Phone OTP
window.recaptchaVerifier = new RecaptchaVerifier(
 "recaptcha",
 { size: "invisible" },
 auth
);

document.getElementById("phoneBtn").onclick = async () => {
 window.confirmationResult =
 await signInWithPhoneNumber(
  auth,
  phone.value,
  window.recaptchaVerifier
 );
 alert("OTP Sent");
};

document.getElementById("otpBtn").onclick = async () => {
 await window.confirmationResult.confirm(otp.value);
 alert("Phone Login Success");
};