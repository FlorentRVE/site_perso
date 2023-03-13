import React from "react";
import { Link } from "react-router-dom";

const Retour = () => {

    return (
        <Link to="/">
            <div className="bg-black text-gray-300 h-8 w-full flex justify-center items-center">
                <p className="">Retour à l'accueil</p>
            </div>
        </Link>
    )
}

export default Retour