import firebaseapp from "../firebase/credentials";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const DB = getFirestore(firebaseapp);

async function SearchUser(string) {

    const Docs = [];
    const collections = collection(DB, "Users");
    const queryTitulo = query(collections, where("Nombres", "==", string));
    const queryId = query(collections, where("Id", "==", string));
    const queryRol = query(collections, where("rol", "==", string));

    const ArraySearch = await Promise.all([getDocs(queryTitulo), getDocs(queryId), getDocs(queryRol)]);

    ArraySearch.forEach((doc) => {
        doc.forEach((Doc) => {
            Docs.push(Doc.data());
        });
    });

    return Docs;
}

export default SearchUser;