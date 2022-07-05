import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"
import { db } from "../firebase";
import { getStorage, ref } from 'firebase/storage'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const storage = getStorage();


export const AddProducts = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');
    const [imageError, setImageError] = useState('');
    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];

    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile);
                setImageError('')
            } else {
                setImage(null);
                setImageError('Por favor, selecciona un archivo compatible (jpg, jpeg o png)');
            }
        } else {
            console.log("Selecciona una foto del producto")
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const uploadTask = ref(storage, `product-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapShot => {
            const progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100
            console.log(progress);
        }, error => setUploadError(error.message), () => {
            storage.ref('product-images').child(image.name).getDownloadURL().then(url => {
                db.collection('Products').add({
                    title,
                    description,
                    price: Number(price),
                    url
                }).then(() => {
                    setSuccessMsg('Producto agregado exitosamente');
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    document.getElementById('file').value = '';
                    setImageError('');
                    setUploadError('');
                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 3000)
                }).catch(error => setUploadError(error.mesage));
            })
        }) 
    }

    return (
        <div className="container">
            <br />
            <Button variant="secondary" href="/store"><ArrowBackIcon/>Regresar</Button>
            <br />
            <center>
                <h2>Agregar Productos</h2>
            </center>
            <hr />
            {successMsg && <>
                <div className="succesMsg">{successMsg}</div>
            </>}
            <Form >
                <Form.Group>
                    <Form.Label>Nombre del producto (modelo):</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setTitle(e.target.value)} value={title} />
                </Form.Group>                
                <Form.Group>
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setDescription(e.target.value)} value={description}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control type="number" required onChange={(e) => setPrice(e.target.value)} value={price}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subir imagen:</Form.Label>
                    <Form.Control type="file" id="file" required onChange={handleProductImg} />
                    {imageError && <>
                        <div className='error'>{imageError}</div>
                    </>}
                </Form.Group>
                <Form.Group>
                    <br />
                    <br/>
                    <center>
                        <Button variant="warning" type="submit" onClick={handleAddProduct}>Agregar producto</Button>
                        </center>
                </Form.Group>
            </Form>
            {uploadError && <>
                        <div className='error'>{uploadError}</div>
                    </>}
        </div>
    )
}