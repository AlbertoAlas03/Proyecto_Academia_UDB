import firebaseapp from "../firebase/credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

export default async function GetAllUsers() {
    const ArrayUsers = [];
    const Collection = collection(DB, "Users");
    const cursos = await getDocs(Collection); //traemos los cursos de firebase
    cursos.forEach((doc) => { //convertimos los de firebase en info legible 
        ArrayUsers.push(doc.data());
    });
    return ArrayUsers;
}