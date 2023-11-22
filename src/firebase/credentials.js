// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzA91YW93sZGRrYfbZZwT9IeApWWirv1o",
  authDomain: "academiaidiomas-b7900.firebaseapp.com",
  projectId: "academiaidiomas-b7900",
  storageBucket: "academiaidiomas-b7900.appspot.com",
  messagingSenderId: "498883976549",
  appId: "1:498883976549:web:e2f40eb7411c928a05158c"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;