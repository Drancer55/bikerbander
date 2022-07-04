import { Button, Card } from 'react-bootstrap';
import './Login.css'
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState();
    const { logIn, resetPassword, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(user.email, user.password)
            navigate('/store');
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/internal-error') {
                setError('Ocurrió un error, por favor intentalo de nuevo') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/user-not-found') {
                setError('Usuario no registrado') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/wrong-password') {
                setError('La contraseña incorrecta, intenta nuevamente') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/invalid-email') {
                setError('El correo proporcionado no es inválido') || setTimeout(() => setError(''), 3000);
            } else if (error.code === 'auth/too-many-requests') {
                setError('El acceso a esta cuenta ha sido temporalmente deshabilitado debido a muchos intentos fallidos de inicio de sesión. Puedes restaurarlo inmediatamente reestableciendo tu contraseña o puedes intentarlo más tarde') || setTimeout(() => setError(''), 3000);
            }
        }
    };

    const turnBack = () => {
        navigate('/store')
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError("Por favor, ingresa un email.");
        try {
            await resetPassword(user.email);
            setError(
                "Hemos enviado un correo con el enlace para reestablecer tu contraseña :D"
            ) || setTimeout(() => setError(''), 4000);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleWithGoogleSignin = async (user) => {
        loginWithGoogle()
        .then((result) => {
            navigate("/store");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="log">
            <div>
                <Button variant="secondary" onClick={turnBack}><ArrowBackIcon /> Regresar </Button>
            </div>
            <div className='login' >
                <Card className="text-center carta">
                    <Card.Title className="BBLog">BikerBander</Card.Title>
                    <Card.Body>
                        <Card.Title>Iniciar Sesión:</Card.Title>
                        {error && <p className='error'>{error}</p>}
                        <form className="form">
                            <div className="part">
                                <label htmlFor='email'>Email: </label>
                                <input onChange={handleChange} type="email" name="email" id="email" placeholder='Ingresa tu Correo'></input>
                                <br />
                            </div>
                            <div className="part">
                                <label htmlFor='password'>Contraseña: </label>
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder='Contraseña'></input>
                                <br />
                            </div>
                            <div className='partbtn'>
                                <Button variant="dark" onClick={handleSubmit} className="btns">Entrar</Button>
                                <br/>
                                <Button variant="dark" onClick={handleWithGoogleSignin} className="btns">Ingresa con <GoogleIcon/></Button>
                            </div>
                        </form>
                    </Card.Body>
                    <Card.Footer className="cfoot">
                        <p>¿Aún no tienes cuenta?<a href="/register"> Registrate</a></p>
                        <a href="#" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</a>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};