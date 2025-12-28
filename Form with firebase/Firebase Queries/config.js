
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore,onSnapshot,orderBy, limit,or,where,query,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDLGd1FvbPSrhnne8v8ZaGo2SYxV7NJc6o",
  authDomain: "smit-2394a.firebaseapp.com",
  projectId: "smit-2394a",
  storageBucket: "smit-2394a.firebasestorage.app",
  messagingSenderId: "488578676073",
  appId: "1:488578676073:web:81432e210a3475390ab9f8",
  measurementId: "G-J5FQBVF0TF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

export{db,onSnapshot,orderBy, limit,or,where,query,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc}