import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const Error = () => {
    return (
    <div>
        <div>
            < Header/>
            <div>
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas</p>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><p>Retourner sur la page d'accueil</p></Link>
        </div>
    </div>
    
    )
}

export default Error;