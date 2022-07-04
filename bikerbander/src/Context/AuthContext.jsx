import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";

export const AuthContext = createContext();

export const useAuth = () => {

    const context = useContext(AuthContext);
    if (!context) throw new Error("No hay un proveedor de autenticación");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);

    useEffect(() => {
        //Escuchador de eventos en tiempo real -onSnapshot by Firebase
        onSnapshot(collection(db, 'Users'), (snapShot) => {
          //Lista de usuarios registrados [doc.data()] y su respectivo Id para realizar cambios unitarios
            setUsers(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
        //Usuario logueado, el estado cambia si hay o no un usuario logueado
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          //Permite ver los datos del usuario "logueado"
          //console.log(currentUser.email)
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, logIn, user, logOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
};


// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [users, setUsers] = useState(null);
//     const [loading, setLoading] = useState(true);


// const signUp = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
// };

// const logIn = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
// };

// const logOut = () => signOut(auth);

// const GoogleProvider = new GoogleAuthProvider();

// const logInWithGoogle = () => signInWithPopup(auth, GoogleAuthProvider);

// const resetPassword = (email) => {
//     sendPasswordResetEmail(auth, email)
// };

// useEffect(() => {
//     onSnapshot(collection(db, 'Bikers'), (snapShot) => {
//         setUsers(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     })
//     const unSub = onAuthStateChanged(auth, async (currentUser) => {
//         console.log(currentUser)
//         setUser(currentUser);
//         setLoading(false);
//     })
//     return () => unSub;
// }, []);

// return (
//     <authContext.Provider
//         value={{
//             signUp,
//             logIn,
//             logOut,
//             logInWithGoogle,
//             resetPassword,
//             user,
//             users,
//             loading
//         }}
//     >
//         {children}
//     </authContext.Provider>
//     );
// };