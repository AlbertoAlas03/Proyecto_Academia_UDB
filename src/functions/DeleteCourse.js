import firebaseapp from "../firebase/credentials";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

export default async function deleteCourse(course){
const collections = collection(DB, "Cursos");
const RefDoc = doc(collections, course.Id);
const eliminado = await deleteDoc(RefDoc);
return eliminado;
}