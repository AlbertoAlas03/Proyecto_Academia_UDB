import React, { useState } from "react";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import firebaseapp from "./firebase/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth"; //para controlar cambios de inicio de sesion
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseapp); //iniciamos funcion para el inicio de sesion
const fireStore = getFirestore(firebaseapp);

function App() {
  const [user, setUser] = useState(null); //para saber si hay usuario logeado o no

  async function getRol(uid) { //funcion para buscar el rol del usuario
    const docRef = doc(fireStore, `Users/${uid}`);
    const EncryptedDoc = await getDoc(docRef);
    const FinalData = EncryptedDoc.data().rol;
    return FinalData;
  }

  function UserWithRol(userFirebase) {
    getRol(userFirebase.uid).then((rol) => {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        rol: rol,
      };
      setUser(userData);
    });
  }

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) { //si hay usuario de firebase lo guardamos en nuestro estado de usuario, si no hay usuario lo regresamos a null el estado 
      UserWithRol(userFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      {user ? <Home user={user} /> : <Login />}   {/*Si hay usuario logeado mostramos home o si no mostramos login*/}
    </>
  );
}

export default App;

//Debemos actualizar las credenciales de la base de datos y descomentar linea 44
