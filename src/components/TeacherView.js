import React from 'react';
import "../css/style.css";
import firebaseapp from "../firebase/credentials.js";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebaseapp);

function TeacherView() {
  return (
    <div>
      vista de profesores
      <button onClick={() => signOut(auth)}>Cerrar sesion</button>
    </div>
  )
}

export default TeacherView
