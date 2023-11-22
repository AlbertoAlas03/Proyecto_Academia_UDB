import firebaseapp from "../firebase/credentials";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

export default async function deleteUser(user){
const collections = collection(DB, "Users");
const RefDoc = doc(collections, user.Id);
const eliminado = await deleteDoc(RefDoc);
return eliminado;
}