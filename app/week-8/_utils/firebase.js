import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLW4dL-40er183NyDPwUFfFsZM3FOeutI",
  authDomain: "cprg306-assignments-ed6cf.firebaseapp.com",
  projectId: "cprg306-assignments-ed6cf",
  storageBucket: "cprg306-assignments-ed6cf.appspot.com",
  messagingSenderId: "939183180048",
  appId: "1:939183180048:web:ac6b5c422a2fa6be27bd95",
  measurementId: "G-G6D1RM4829",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
