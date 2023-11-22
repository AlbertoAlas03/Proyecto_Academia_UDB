import firebaseapp from "../firebase/credentials";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

async function SearchStudent(string) {

    const Docs = [];
    const collections = collection(DB, "Estudiantes");
    const queryTitulo = query(collections, where("Nombres", "==", string));
    const queryId = query(collections, where("Id", "==", string));

    const ArraySearch = await Promise.all([getDocs(queryTitulo), getDocs(queryId)]);

    ArraySearch.forEach((doc) => {
        doc.forEach((Doc) => {
            Docs.push(Doc.data());
        });
    });

    return Docs;
}

export default SearchStudent;