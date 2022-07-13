import React, { useState}  from 'react';
import { Button, Form, FormGroup, Modal, Nav } from "react-bootstrap";
import './Modal.css';
import { useAuth } from "../Context/AuthContext";
import Avatar from '@mui/material/Avatar';
import { db } from '../firebase';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, getFirestore } from "firebase/firestore";


export const PerfilModal = ({ id }) => {
    // console.log(id)
    //Despliega el modal con el seteo de Show inicializado en false
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [phone, setPhone] = useState(null);
    const [adress, setAdress] = useState(null);
    const [country, setCountry] = useState(null);
    const [email, setEmail] = useState(null);
    const { user, perfil } = useAuth();

    const upDataDoc = async (e) => {
        e.preventDefault();
        const ref = doc(collection(db,'Banders', id));
        await updateDoc(ref, {
            phone: phone,
            adress: adress,
            country: country,
            email: email
        });
        handleClose();
        alert('updated')
    };

    return (
        <>  
            {/* Retorna un botón que aparece en pantalla */}
            <Nav.Link onClick={handleShow} className="Slog1">Perfil</Nav.Link>
            {/* El modal se inicializa en show=falso, hasta que sea true para mostrarse */}
            <Modal show={show} onHide={handleClose}>
                {/* Elementos del modal Bootstrap */}
                <Modal.Header closeButton>
                    <Modal.Title className="ModTitle">
                    <div className="block">
                        <Avatar alt={user.displayName || user.email} src={user.photoURL} />    
                        {user.displayName || user.email}
                    </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div>
                            <label htmlFor='phone'>Teléfono:</label>
                            <input typeof='tel' name="phone" onChange={(e) => setPhone(e.target.value)} placeholder={user.phone}></input>    
                        </div>
                        <div>
                            <label htmlFor='mail'>Email:</label>
                            <input typeof='email' name="mail" onChange={(e) => setEmail(e.target.value)} placeholder={user.email}></input>                            
                        </div>
                        <div>
                            <label htmlFor='country'>Ciudad:</label>
                            <input type="text" name="country" onChange={(e) => setCountry(e.target.value)} placeholder={user.country}></input>                            
                        </div>
                        <div>
                            <label htmlFor='adress'>Dirección:</label>
                            <textarea name="adress" onChange={(e) => setAdress(e.target.value)} placeholder={user.adress}></textarea>
                        </div>
                            
                    </Form>
                </Modal.Body>
                <Modal.Footer className="mdlFooter">
                    <Button variant="secondary" onClick={handleClose} className="modalbtn"> 
                        Cancelar
                    </Button>
                    <Button variant="warning" onClick={upDataDoc} type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}