import firebaseapp from "../firebase/credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

export default async function GetAllCourses() {
    const ArrayCursos = [];
    const Collection = collection(DB, "Cursos");
    const cursos = await getDocs(Collection); //traemos los cursos de firebase
    cursos.forEach((doc) => { //convertimos los de firebase en info legible 
        ArrayCursos.push(doc.data());
    });
    return ArrayCursos;
}