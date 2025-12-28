
import{db} from "./config.js"
import {collection,addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


async function AddDocument(){
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}
AddDocument()