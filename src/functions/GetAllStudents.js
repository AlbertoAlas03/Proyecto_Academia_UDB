import firebaseapp from "../firebase/credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

export default async function GetAllStudents() {
    const ArrayEstudiantes = [];
    const Collection = collection(DB, "Estudiantes");
    const cursos = await getDocs(Collection); //traemos los cursos de firebase
    cursos.forEach((doc) => { //convertimos los de firebase en info legible 
        ArrayEstudiantes.push(doc.data());
    });
    return ArrayEstudiantes;
}