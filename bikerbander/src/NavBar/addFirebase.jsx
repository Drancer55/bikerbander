import { app } from '../firebase';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const addFirebase = async (perfil) => {
    // console.log(perfil)
    try {
        await addDoc(collection(db, 'Banders'), perfil);
    } catch (e) {
        alert('Ocurrió el error: ', e)
    }
}