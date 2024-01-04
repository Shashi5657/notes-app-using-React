
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAxYrZp9ACm27Hwn2OgYVYHqAPcKc2iHMU",
  authDomain: "notes-app-d285d.firebaseapp.com",
  projectId: "notes-app-d285d",
  storageBucket: "notes-app-d285d.appspot.com",
  messagingSenderId: "893169317113",
  appId: "1:893169317113:web:6c2c33123c30d279c15e28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")