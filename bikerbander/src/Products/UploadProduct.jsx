import { app } from '../firebase';
import { collection, getFirestore, addDoc, doc, updateDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const UploadProduct = async (product, url) => {
    try {
        await addDoc(collection(db, 'Products'), product);
        alert("El productoha sido dado de alta exitosamente")
    } catch (e) {
        alert('Ocurrió el error: ' + e)
    }
}