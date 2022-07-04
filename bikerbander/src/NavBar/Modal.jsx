import React, { useState}  from 'react';
import { Button, Modal, Nav } from "react-bootstrap";
import WarningIcon from '@mui/icons-material/Warning';
import './Modal.css';
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const db = getFirestore();
//Modal traido de la librería Bootstrap
export const PerfilModal = ({ id }) => {
    
    // console.log(id)
    //Despliega el modal con el seteo de Show inicializado en false
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, perfil } = useAuth()

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
                    <div className="contain">
                        <div className="part2">
                            <h5>Email: </h5>
                            <a href="#"> {user.email}</a>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="mdlFooter">
                    <Button variant="secondary" onClick={handleClose} className="modalbtn"> 
                        Cancelar
                    </Button>
                    <Button variant="warning" onClick={handleClose} className="modalbtn">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}