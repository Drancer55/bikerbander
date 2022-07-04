import React, { useState}  from 'react';
import { Button, Form, FormGroup, Modal, Nav } from "react-bootstrap";
import './Modal.css';
import { useAuth } from "../Context/AuthContext";
import Avatar from '@mui/material/Avatar';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, getFirestore } from "firebase/firestore";

const db = getFirestore();

// export const updateItem = async (id, obj) => {
//     const colRef = collection(db, 'Banders');
//     await updateDoc(doc(colRef, id), obj)
// }
//Modal traido de la librería Bootstrap
export const PerfilModal = ({ id }) => {
    // console.log(id)
    //Despliega el modal con el seteo de Show inicializado en false
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dudeID, setDudeID] = useState(id);
    const [phone, setPhone] = useState(null);
    const { user, perfil } = useAuth();
    
    const upDataDoc = async (id, phone, adress, country, email) => {
        await upDataDoc(doc(db, `Banders/${id}`), {
            phone,
            adress,
            country,
            email
        } )
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
                        <label htmlFor='phone'>Teléfono:</label>
                        <input typeof='tel' name="phone" onChange={(e) => phone(e.target.value)} placeholder={user.phone}></input>
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