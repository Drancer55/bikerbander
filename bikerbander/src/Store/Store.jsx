import React, { Component}  from 'react';
import NavBar from '../NavBar/NavBar';
import { AuthContext, useAuth } from '../Context/AuthContext'
import './Store.css'
import { Products } from '../Products/Products';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Cart } from '../Cart/Cart';

export const Store = () => {
    const { user, loading, addItemCart } = useAuth(AuthContext);
    const navigate = useNavigate();
    
    const handleAddPage = () => {
        navigate('/add-products')
}

    if(loading) return <h5>Loading...</h5>

    return (
        <div className='wrapper'>
            <NavBar />
            <div className="logged">
                <br />
                    <div>
                        <Cart/>
                        {user ? <h5 className="welcome">Bienvenido: {user.displayName || user.email}</h5> : <h5>Gracias por tu visita</h5>}
                    </div>
                <hr/>
            </div>
            <div className="content">
                {Products.map((item, i) => (
                    <>
                        <Card border="primary" key={i} style={{ width: '18rem', height: '30rem' }}>
                        <h3 className='Slog'>BikerBander</h3>
                        <Card.Body>
                            <Card.Title>{item.item_name}</Card.Title>
                            <Card.Text>
                                <img className="imagen" src={item.img} alt={item.item_name} />            
                                <p>{ item.short_description}</p>
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <center>
                                <h5>${item.price_without_tax}</h5>
                            <Button onClick={(() => addItemCart(item))}>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                        </center>
                    </Card.Footer>
                </Card>
                <br />
                </>
                ))}
            </div>
            <br/>
        </div>
    )
}