import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { uploadFile } from "../firebase";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { UploadProduct } from "./UploadProduct";


export const AddProducts = () => {
    const navigate = useNavigate();
    
    const [file, setfile] = useState(null);
    const [product, setProduct] = useState({
        item_name: '',
        short_description: '',
        price: '', 
        img: ''
    });
    
    const handleBack = () => {
        navigate('/store');
    }

    const handleProduct = ({ target: { name, value } }) => {
        setProduct({ ...product, [name]: value });
        // console.log(product);//arreglo de objetos del producto
        }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = await uploadFile(file);
            // console.log(url); //muestra el URL de la imágen del producto
            UploadProduct(product, url);
            navigate('/store');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <br />
            <Button variant="secondary" onClick={handleBack}><ArrowBackIcon/>Regresar</Button>
            <br />
            <center>
                <h2>Agregar Productos</h2>
            </center>
            <hr />
            <Form >
                <Form.Group>
                    <Form.Label>Nombre del producto (modelo):</Form.Label>
                    <Form.Control type="text" name="item_name" id="item_name" required onChange={handleProduct} />
                </Form.Group>                
                <Form.Group>
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control type="text" name="short_description" id="short_description" required onChange={handleProduct} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control type="number" name="price" id="price" required onChange={handleProduct} min={1}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subir imagen:</Form.Label>
                    <Form.Control type="file" id="" onChange={e => setfile(e.target.files[0])} required/>
                </Form.Group>
                <Form.Group>
                    <br />
                    <br/>
                    <center>
                        <Button variant="warning" type="submit" onClick={(e) => { handleSubmit(e); handleProduct(e) }}>Agregar producto</Button>
                        </center>
                </Form.Group>
            </Form>
        </div>
    )
}