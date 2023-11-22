import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseapp from "../firebase/credentials";

const DB = getFirestore(firebaseapp);

const CountDocuments = () => {
  const [numCursos, setNumCursos] = useState(0);

  useEffect(() => {
    const contarCursos = async () => {
      try {
        const cursosCollection = collection(DB, "Cursos");
        const cursosSnapshot = await getDocs(cursosCollection);
        const count = cursosSnapshot.size;

        setNumCursos(count);
      } catch (error) {
        console.error("Error al contar documentos:", error);
      }
    };

    contarCursos();
  }, []);

  return <p className="font-courses fw-bold">{numCursos} cursos</p>;
};

export default CountDocuments;
