// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLW4dL-40er183NyDPwUFfFsZM3FOeutI",
  authDomain: "cprg306-assignments-ed6cf.firebaseapp.com",
  projectId: "cprg306-assignments-ed6cf",
  storageBucket: "cprg306-assignments-ed6cf.appspot.com",
  messagingSenderId: "939183180048",
  appId: "1:939183180048:web:ac6b5c422a2fa6be27bd95",
  measurementId: "G-G6D1RM4829",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
