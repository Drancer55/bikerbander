// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyprNGGAT270TowSAAo5c0pghC8J3EdzM",
    authDomain: "bikerbander.firebaseapp.com",
    projectId: "bikerbander",
    storageBucket: "bikerbander.appspot.com",
    messagingSenderId: "163221267900",
appId: "1:163221267900:web:44ec0a7005278f94b337b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);