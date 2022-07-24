import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA9TVWO359OjzH68aD8xyNhB8hyyc3n8SY",
  authDomain: "portfolio-d593a.firebaseapp.com",
  projectId: "portfolio-d593a",
  storageBucket: "portfolio-d593a.appspot.com",
  messagingSenderId: "200749250106",
  appId: "1:200749250106:web:04232e0411548901f9a703",
  measurementId: "G-P6R1HT5T5L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);