// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByJGeqVa9Nb0awJVg8om0gIppHN3y7MOw",
  authDomain: "academiaudb-6cea4.firebaseapp.com",
  projectId: "academiaudb-6cea4",
  storageBucket: "academiaudb-6cea4.appspot.com",
  messagingSenderId: "811636862264",
  appId: "1:811636862264:web:f75437edd4c2112c9625cd"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;