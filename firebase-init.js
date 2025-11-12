// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8q0qJf_RG91s2KjbKmo2b2Wd62ZbjGGw",
  authDomain: "cuambeenglishschool-398fe.firebaseapp.com",
  projectId: "cuambeenglishschool-398fe",
  storageBucket: "cuambeenglishschool-398fe.firebasestorage.app",
  messagingSenderId: "780467231205",
  appId: "1:780467231205:web:f77ac28a94c2b07cd2b70c",
  measurementId: "G-03E2FSHP3J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
