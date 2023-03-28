import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database" 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBBp3vDC5rYxR-JazdxlqZQdy8mUCg4q4E",
  authDomain: "pgiocm-1227b.firebaseapp.com",
  projectId: "pgiocm-1227b",
  storageBucket: "pgiocm-1227b.appspot.com",
  messagingSenderId: "800561173498",
  appId: "1:800561173498:web:b291aa95baa39e6bf38a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbb = getDatabase(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
