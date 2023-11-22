import firebaseapp from "../firebase/credentials";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

export default async function deleteStudent(student){
const collections = collection(DB, "Estudiantes");
const RefDoc = doc(collections, student.Id);
const eliminado = await deleteDoc(RefDoc);
return eliminado;
}