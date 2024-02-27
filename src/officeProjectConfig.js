// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSHUzmThG0Q9bhNARDpGuXl3x-OwdvdSY",
  authDomain: "office--project.firebaseapp.com",
  projectId: "office--project",
  storageBucket: "office--project.appspot.com",
  messagingSenderId: "1045006556452",
  appId: "1:1045006556452:web:d753583535ae4537b067b1",
  measurementId: "G-YLSB5C4YL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app)

export {auth, firestore};
