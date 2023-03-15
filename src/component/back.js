import React from "react";
import { Link } from "react-router-dom";

const Retour = () => {

    return (
        <Link to="/">
            <div className="bg-black text-gray-300 h-12 w-full flex justify-center items-center hover:bg-lime-500 hover:text-black">
                <p className="spec">Retour à l'accueil</p>
            </div>
        </Link>
    )
}

export default Retour