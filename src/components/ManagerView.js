import React from 'react'
import firebaseapp from "../firebase/credentials.js";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebaseapp);

function ManagerView() {
  return (
    <div>
      vista de gestor
      <button onClick={() => signOut(auth)}>Cerrar sesion</button>
    </div>
  )
}

export default ManagerView
