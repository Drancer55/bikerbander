import React, { Component}  from 'react';
import './LandingPage.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// Presentation page
const LandingPage = () => {
    const navigate = useNavigate();
    const entrance = () => {
        navigate('/store')
    }
// carousel of various bicycle models
    return (
        <div className="publicity">
            <div>
                <h4 className="welcome">Bienvenido</h4>
                <Button className="store" variant="btn btn-outline-warning" onClick={entrance}>Entrar</Button>
                <h3 className="public">BikerBander</h3>
            </div>
        </div>
    )
}

export default LandingPage;