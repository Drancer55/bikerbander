import * as React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { PerfilModal } from './Modal'


const NavBar = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate('/login')
    }
    const handleLogOut = async () => {
        await logOut();
        navigate('/store')
    }

    return (
        <Navbar bg="warning" expand="sm" fixed="top">
            <Container>
                <Navbar.Brand href="/bikerbander" className="Slog" >BikerBander</Navbar.Brand>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown" className="Slog1">
                            <NavDropdown.Item href="#action3" className="Slog1">MTB</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="Slog1">Ruta</NavDropdown.Item>
                            <NavDropdown.Item href="#action5" className="Slog1">Tandem</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action7" className="Slog1">Niños</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2" className="Slog1">Contacto</Nav.Link>                     
                        {user ?  <PerfilModal id={user.uid} /> : null}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search"/>
                    </Form>
                    <Navbar.Brand>
                        {!user ? <Button variant="danger" onClick={handleLogIn}>Iniciar Sesión</Button> : <Button variant="danger" onClick={handleLogOut}>Cerrar Sesión</Button>}
                    </Navbar.Brand>
                    <Navbar.Brand>
                        {user ?
                            <Stack>
                                <Avatar alt={user.displayName || user.email} src={user.photoURL} />
                            </Stack>
                            : null}
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;