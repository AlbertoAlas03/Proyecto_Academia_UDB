import firebaseapp from "../firebase/credentials";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

function AddCourse(course) {
    try {
        const collections = collection(DB, "Cursos"); //nombre de la collection
        const newDoc = doc(collections, course.Id); //hacemos referencia al documento a travez de su id
        setDoc(newDoc, course); //creamos un documento nuevo
    } catch (error) {
        alert("Error al cargar la data");
    }

}

export default AddCourse;