// ✅ Firebase Initialization for CUAMBE ENGLISH SCHOOL
// ----------------------------------------------------

import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// 🔥 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8q0qJf_RG91s2KjbKmo2b2Wd62ZbjGGw",
  authDomain: "cuambeenglishschool-398fe.firebaseapp.com",
  projectId: "cuambeenglishschool-398fe",
  storageBucket: "cuambeenglishschool-398fe.appspot.com", // ✅ corrected
  messagingSenderId: "780467231205",
  appId: "1:780467231205:web:f77ac28a94c2b07cd2b70c",
  measurementId: "G-03E2FSHP3J"
};


// 🚀 Initialize Firebase App
export const app = initializeApp(firebaseConfig);


// 🔐 Initialize Firebase Authentication
export const auth = getAuth(app);

// ✅ Set persistence for mobile browsers (so login stays valid)
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("✅ Firebase Auth persistence set"))
  .catch((err) => console.error("⚠️ Persistence error:", err));


// 🗂️ Initialize Firestore Database
export const db = getFirestore(app);


// 🧠 Debug logging
console.log("✅ Firebase initialized successfully for CUAMBE ENGLISH SCHOOL");
