import React, { Component}  from 'react';
import NavBar from '../NavBar/NavBar';
import { useAuth } from '../Context/AuthContext'
import './Store.css'
import { Products } from '../Products/Products';
import { Button } from 'react-bootstrap';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const Store = () => {
    const { user, loading } = useAuth();
    
    if(loading) return <h5>Loading...</h5>

    return (
        <div className='wrapper'>
            <NavBar />
            <div className="logged">
                <br />
                <center>
                    <div>
                        {user ? <h5>Bienvenido: {user.displayName || user.email} <Button variant="secondary"><LocalGroceryStoreIcon/></Button></h5> : <h5>Gracias por tu visita</h5>}
                    </div>
                </center>
                <hr/>
            </div>
            <Products />
            <br/>
            <center>
                <Button variant="primary" href="/add-products"> Agregar producto nuevo</Button>
            </center>
            <br/>
        </div>
    )
}