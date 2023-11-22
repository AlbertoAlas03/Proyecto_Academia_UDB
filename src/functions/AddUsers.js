import firebaseapp from "../firebase/credentials";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

function AddUser(user) {
    try {
        const collections = collection(DB, "Users"); //nombre de la collection
        const newDoc = doc(collections, user.Id); //hacemos referencia al documento a travez de su id
        setDoc(newDoc, user); //creamos un documento nuevo
    } catch (error) {
        alert("Error, al cargar la data");
    }

}

export default AddUser;