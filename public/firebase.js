// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKZP9ynrPyf64mNgPHS0JBhzKF2acc3Gg",
  authDomain: "spotify-explore-12fbf.firebaseapp.com",
  projectId: "spotify-explore-12fbf",
  storageBucket: "spotify-explore-12fbf.firebasestorage.app",
  messagingSenderId: "631725291446",
  appId: "1:631725291446:web:4b25b75b90203525b33317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
