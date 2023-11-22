import firebaseapp from "../firebase/credentials";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

async function SearchData(string) {

    const Docs = [];
    const collections = collection(DB, "Cursos");
    const queryTitulo = query(collections, where("Titulo", "==", string));
    const queryId = query(collections, where("Id", "==", string));

    const ArraySearch = await Promise.all([getDocs(queryTitulo), getDocs(queryId)]);

    ArraySearch.forEach((doc) => {
        doc.forEach((Doc) => {
            Docs.push(Doc.data());
        });
    });

    return Docs;
}

export default SearchData;