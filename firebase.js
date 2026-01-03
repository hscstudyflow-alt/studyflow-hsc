// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8kLt1P-eLqvAjf0FyOVuQkjwl4TeOFgk",
  authDomain: "studyflow-hsc.firebaseapp.com",
  projectId: "studyflow-hsc",
  appId: "1:810611305536:web:0324a8308d2515b62003a5",
  measurementId: "G-12PRQSYGSP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
