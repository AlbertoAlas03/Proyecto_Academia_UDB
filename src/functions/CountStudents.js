import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseapp from "../firebase/credentials";

const DB = getFirestore(firebaseapp);

const CountStudents = () => {
  const [numStudents, setNumStudents] = useState(0);

  useEffect(() => {
    const contarStudents = async () => {
      try {
        const cursosCollection = collection(DB, "Estudiantes");
        const cursosSnapshot = await getDocs(cursosCollection);
        const count = cursosSnapshot.size;

        setNumStudents(count);
      } catch (error) {
        console.error("Error al contar documentos:", error);
      }
    };

    contarStudents();
  }, []);

  return <p className="font-courses fw-bold">{numStudents} estudiantes</p>;
};

export default CountStudents;
