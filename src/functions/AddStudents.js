import firebaseapp from "../firebase/credentials";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

function AddStudent(student) {
    try {
        const collections = collection(DB, "Estudiantes"); //nombre de la collection
        const newDoc = doc(collections, student.Id); //hacemos referencia al documento a travez de su id
        setDoc(newDoc, student); //creamos un documento nuevo
    } catch (error) {
        alert("Error, al cargar la data");
    }

}

export default AddStudent;