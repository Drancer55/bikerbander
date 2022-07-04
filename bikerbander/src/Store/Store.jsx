import NavBar from '../NavBar/NavBar';
import { useAuth } from '../Context/AuthContext'
import './Store.css'

export const Store = () => {
    const { user, loading } = useAuth();
    
    if(loading) return <h5>Loading...</h5>

    return (
        <>
            <NavBar />
            <div className="logged">
                {user ? <h5>Bienvenido: {user.email || user.displayName}</h5> : <h5>Gracias por tu visita</h5>}
            </div>
        </>
    )
}