// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-t75S7u2Mct4zAA_Kkq-xZqVpvchBzgI",
  authDomain: "academiaudb-79ed0.firebaseapp.com",
  projectId: "academiaudb-79ed0",
  storageBucket: "academiaudb-79ed0.appspot.com",
  messagingSenderId: "619056377265",
  appId: "1:619056377265:web:a3609ef557e1ebdb362190"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;