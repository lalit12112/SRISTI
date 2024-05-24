// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoKKpQlTWLEcspaIW6XSid8vmDaEzKbbU",
  authDomain: "otp-login-e220d.firebaseapp.com",
  projectId: "otp-login-e220d",
  storageBucket: "otp-login-e220d.appspot.com",
  messagingSenderId: "961233783756",
  appId: "1:961233783756:web:0e3369fd4bbe19f3992b69",
  measurementId: "G-39D5ZP9T0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
