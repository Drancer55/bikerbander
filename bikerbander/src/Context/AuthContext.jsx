import React, { createContext, useContext, useEffect, useState } from "react";
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
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState(() => {
        try {
            const itemsLocalStorage = localStorage.getItem("cartProducts");
            return itemsLocalStorage ? JSON.parse(itemsLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });
    
    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    const GooglProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => signInWithPopup(auth, GooglProvider);
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        console.log(cartItems);
        //Escuchador de eventos en tiempo real -onSnapshot by Firebase
        onSnapshot(collection(db, 'Banders'), (snapShot) => {
          //Lista de usuarios registrados [doc.data()] y su respectivo Id para realizar cambios unitarios
            setPerfil(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
        //Usuario logueado, el estado cambia si hay o no un usuario logueado
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          //Permite ver los datos del usuario "logueado"
          //console.log(currentUser.email)
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe;
    }, [cartItems]);

    const addItemCart = (item) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === item.id
        );

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === item.id) {
                        return { ...inCart, quantity: inCart.quantity + 1 };
                    } else return productInCart;
                })
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const deleteItemCart = (item) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === item.id
        );

        if (inCart.quantity === 1) {
            setCartItems(cartItems.filter(productInCart => productInCart.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                if (productInCart.id === item.id) {
                    return { ...inCart, quantity: inCart.quantity - 1 };
                } else return productInCart;
            }));
        }
    };

    return (
        <AuthContext.Provider value={{ signUp, logIn, user, logOut, loading, resetPassword, loginWithGoogle, perfil, cartItems, addItemCart, deleteItemCart }}>
            {children}
        </AuthContext.Provider>
    )
};