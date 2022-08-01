import React, { Component}  from 'react';
import './NotFound.css'

// When the user uses an path other than those already established, an error appears
export const NotFound = () => {
    return (
        <div className="cuatro">
            <h1>Error 404</h1>
            <h3>Página no encontrada (u.u)</h3>
        </div>
    )
}