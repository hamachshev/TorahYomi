import app from "../firebase.config";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default db;
