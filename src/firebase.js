import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    setDoc,
    updateDoc

} from "firebase/firestore/lite";

 const app=initializeApp(
    {
        apiKey: "AIzaSyCerlyNd4U1ht2LcLzHDw9LNgR9tZ32tLE",
        authDomain: "facebook-messenger-clone-570dc.firebaseapp.com",
        projectId: "facebook-messenger-clone-570dc",
        storageBucket: "facebook-messenger-clone-570dc.appspot.com",
        messagingSenderId: "999599957468",
        appId: "1:999599957468:web:2c2d4d672849f58dc21b19",
        measurementId: "G-S3NTNLXH4T"
    }
)

const db= getFirestore(app)

export default db