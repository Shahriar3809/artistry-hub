// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6A6anQmAimkZw4xakPL6Z3SBFX1H8vB4",
  authDomain: "art-and-craft-assignment.firebaseapp.com",
  projectId: "art-and-craft-assignment",
  storageBucket: "art-and-craft-assignment.appspot.com",
  messagingSenderId: "161477018070",
  appId: "1:161477018070:web:1d3296f66689b44e8f6477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;