import { Button, Card } from 'react-bootstrap';
import './Login.css'
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addFirebase } from './addFirebase';

export const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [perfil, setPerfil] = useState({
        email: '',
        adress: '',
        country: '',
        phone: ''
    });
    const [error, setError] = useState();
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async () => {
        // e.preventDefault();
        setError('')
        try {
            await signUp(user.email, user.password)
            // navigate('/store');
        } catch (error) {
            // console.log(error.code)
            if (error.code === 'auth/internal-error') {
                setError('Ocurrió un error, por favor intentalo de nuevo') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico proporcionado ya está registrado') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/weak-password') {
                setError('La contraseña debe tener al menos 6 caracteres') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/invalid-email') {
                setError('El correo proporcionado no es inválido') || setTimeout(() => setError(''), 3000)};
        }
    };

    const turnBack = () => {
        navigate('/login')
    }

    const handleChange1 = ({ target: { name, value } }) => {
        setPerfil({ ...perfil, [name]: value })
    }
    
    const handleSubmit1 = (e) => {
        e.preventDefault();
        addFirebase(perfil);
        navigate('/store')
    }

    return (
        <div className="log">
            <div>
                <Button variant='secondary' onClick={turnBack}><ArrowBackIcon /> Regresar </Button>
            </div>
            <div className='login'>
                <Card className="text-center carta">
                    <Card.Title className="BBLog">BikerBander</Card.Title>
                    <Card.Body>
                        <Card.Title>Registro:</Card.Title>
                        {error && <p className='error'>{error}</p>}
                        <form className="form">
                            <div className="part">
                                <label htmlFor='email'>Email:</label>
                                <input onChange={(e) => {handleChange(e); handleChange1(e)}} type="email" name="email" id="email" placeholder='exmple_123@mail.com' required></input>
                                <br />
                            </div>
                            <div className="part">
                                <label htmlFor='password'>Contraseña:</label>
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder='Contraseña' required></input>
                                <br />
                            </div>
                            <div className="part">
                                <label htmlFor='adress'>Dirección:</label>
                                <input onChange={handleChange1} type="text" name="adress" placeholder='Domicilio' required></input>
                                <br />
                            </div>
                            <div className="part">
                                <label htmlFor='country'>Pais:</label>
                                <input onChange={handleChange1} type="box-text" name="country" placeholder='Pais' required></input>
                                <br />
                            </div>
                            <div className="part">
                                <label htmlFor='phone'>Teléfono:</label>
                                <input onChange={handleChange1} type="phone" name="phone" placeholder='Teléfono:' required></input>
                                <br />
                            </div>
                            <div className="partbtn">
                                <Button onClick={(e) => {handleSubmit(e); handleSubmit1(e)}}variant="dark">Registrar</Button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}