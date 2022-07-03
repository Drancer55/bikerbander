import { useAuth } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import {BsGoogle} from 'react-icons/bs';
import { Button } from 'react-bootstrap';

export const Login = () => {
    const { login, loginWithGoogle, user } = useAuth();
    // const navigate = useNavigate();

    const handleWithGoogleSignin = async (user) => {
        loginWithGoogle()
            .then((result) => {
                alert("Login con éxito")
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <Button variant="warning" onClick={handleWithGoogleSignin} size="md">
                Inicia Sesión <BsGoogle />
            </Button>
        </>
    )
};