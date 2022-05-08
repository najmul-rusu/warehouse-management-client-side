// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDy3IqGyGyGr37qlpOJikV9H7NBs9C94",
  authDomain: "mobile-house-5c3b8.firebaseapp.com",
  projectId: "mobile-house-5c3b8",
  storageBucket: "mobile-house-5c3b8.appspot.com",
  messagingSenderId: "910054352036",
  appId: "1:910054352036:web:98ae75df3d23a013d1f231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;