import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseapp from "../firebase/credentials";

const DB = getFirestore(firebaseapp);

const CountUsers = () => {
  const [numUsers, setNumUsers] = useState(0);

  useEffect(() => {
    const contarUsers = async () => {
      try {
        const cursosCollection = collection(DB, "Users");
        const cursosSnapshot = await getDocs(cursosCollection);
        const count = cursosSnapshot.size;

        setNumUsers(count);
      } catch (error) {
        console.error("Error al contar documentos:", error);
      }
    };

    contarUsers();
  }, []);

  return <p className="font-courses fw-bold">{numUsers} usuarios</p>;
};

export default CountUsers;
