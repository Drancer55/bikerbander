import React from 'react';
import './Products.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import image from '../assets/Bicis/1.jpg';
import image2 from '../assets/Bicis/2.jpg';
import image3 from '../assets/Bicis/3.jpg';
import image4 from '../assets/Bicis/4.jpg';
import image5 from '../assets/Bicis/5.jpg';
import image6 from '../assets/Bicis/6.jpg';
import image7 from '../assets/Bicis/7.jpg';
import image8 from '../assets/Bicis/8.jpg';
import image9 from '../assets/Bicis/9.jpg';
import image10 from '../assets/Bicis/10.jpg';
import image11 from '../assets/Bicis/11.jpg';
import image12 from '../assets/Bicis/12.jpg';
import image13 from '../assets/Bicis/13.jpg';
import image14 from '../assets/Bicis/14.jpg';
import image15 from '../assets/Bicis/15.jpg';
import image16 from '../assets/Bicis/16.jpg';

export const Products = () => {
    return (
        <div className="content">
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Modelo 1</Card.Header>
                <Card.Body>
                    <Card.Title>MTB Alum r26</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image} alt='producto'/>            
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Modelo 2</Card.Header>
                <Card.Body>
                    <Card.Title>Electric bike</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image2} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>Modelo 3</Card.Header>
                <Card.Body>
                    <Card.Title>MTB electric bike r27</Card.Title>
                    <Card.Text>
                    <img className="imagen" src={image3} alt='producto'/> 
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Modelo 4</Card.Header>
                <Card.Body>
                    <Card.Title>Snow bike MTB </Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image4} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />    

            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header>Modelo 5</Card.Header>
                <Card.Body>
                    <Card.Title>Folding electric bicycle</Card.Title>
                    <Card.Text>
                    <img className="imagen" src={image5} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Modelo 6</Card.Header>
                <Card.Body>
                    <Card.Title>MTB aluminio r-27</Card.Title>
                    <Card.Text>
                    <img className="imagen" src={image6} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Modelo 7</Card.Header>
                <Card.Body>
                    <Card.Title>Electric dark bike</Card.Title>
                    <Card.Text>
                    <img className="imagen" src={image7} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header>Modelo 8</Card.Header>
                <Card.Body>
                    <Card.Title>Vintage racer bike 80´s</Card.Title>
                    <Card.Text>
                    <img className="imagen" src={image8} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br/>

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Modelo 9</Card.Header>
                <Card.Body>
                    <Card.Title>Blue city bike r-24</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image9} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Modelo 10</Card.Header>
                <Card.Body>
                    <Card.Title>Electric bike r-26</Card.Title>
                    <Card.Text>
                    <img className="imagen" src={image10} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>Modelo 11</Card.Header>
                <Card.Body>
                    <Card.Title>Route r-700</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image11} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Modelo 12</Card.Header>
                <Card.Body>
                    <Card.Title>Racer bike pro r-700</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image12} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header>Modelo 13</Card.Header>
                <Card.Body>
                    <Card.Title>Hunter custom r-700</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image13} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Modelo 14</Card.Header>
                <Card.Body>
                    <Card.Title>Sunday ride tricycle</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image14} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Modelo 15</Card.Header>
                    <Card.Body>
                    <Card.Title>Heavy-duty tricycle</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image15} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
            <br />

            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header>Modelo 16</Card.Header>
                <Card.Body>
                    <Card.Title>Tricycle saves dogs</Card.Title>
                    <Card.Text>
                        <img className="imagen" src={image16} alt='producto'/> 
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <center>
                        <Button>Agregar al carrito <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Button>
                    </center>
                </Card.Footer>
            </Card>
        </div>

    )
}
