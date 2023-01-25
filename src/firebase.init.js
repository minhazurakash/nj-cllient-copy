// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVdr1a-NBmzlpxqKpEfdUVlrHIzBrv-MA",
  authDomain: "nj-abaacorp-1bff0.firebaseapp.com",
  projectId: "nj-abaacorp-1bff0",
  storageBucket: "nj-abaacorp-1bff0.appspot.com",
  messagingSenderId: "101942383048",
  appId: "1:101942383048:web:1eaa296d4e2eee455470fd",
  measurementId: "G-Z73B4TCWNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
