import { Button, Card } from 'react-bootstrap';
import './Login.css'
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState();
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signUp(user.email, user.password)
            navigate('/store');
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/internal-error') {
                setError('Ocurrió un error, por favor intentalo de nuevo') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico proporcionado ya está registrado') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/weak-password') {
                setError('La contraseña debe tener al menos 6 caracteres') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/invalid-email') {
                setError('El correo proporcionado es inválido') || setTimeout(() => setError(''), 3000)};
        }
    };

    const turnBack = () => {
        navigate('/login')
    }

    return (
        <>
            <div>
                <Button variant='light' onClick={turnBack}><ArrowBackIcon /> Regresar </Button>
            </div>
            <div className='login'>
                <Card className="text-center">
                    <Card.Title className="BBLog">BikerBander</Card.Title>
                    <Card.Body>
                        <Card.Title>Registro:</Card.Title>
                        {error && <p className='error'>{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>Email:</label>
                            <input onChange={handleChange} type="email" name="email" id="email" placeholder='Ingresa tu Correo'></input>
                            <br />
                            <label htmlFor='password'>Contraseña</label>
                            <input onChange={handleChange} type="password" name="password" id="password" placeholder='Contraseña'></input>
                            <br />
                            <button>Registrar</button>
                        </form>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <p>Footer</p>
                    </Card.Footer>
                </Card>
            </div>
        </>
    );
}