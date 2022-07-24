// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const uploadFile = async (file) => {
    const storageRef = ref(storage, `Bicis/${v4()}`);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef);
    return url;
};