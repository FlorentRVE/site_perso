import React from "react";
import Header from "../header";
import Footer from "../footer";
import * as api from "../../utils/api"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {

    const [data, setData] = useState([]); // Création du state data qui va accueillir nos données. 
  
    useEffect(() => {
      api.getData().then((data) => { // Récupération des données avec getData().
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getData.
      });
    }, []);

    // Puis on utilise data.map() pour parcourir et manipuler les données.

    return(
        <div>
            <Header />

            <h1 className="text-center text-xl text-lime-500 uppercase bg-slate-600 p-4">Projets</h1>

            <div className="flex">
                {data.map((item) => (

                    <Link to={"https://florent-rve.fr/"} target={"_blank"} key={item.id}>
                        <div className="bg-lime-400 m-3 p-3 text-center">
                            <img src={item.img} alt={'presentation projet'} className="w-50"/>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>

                        </div>
                    </Link>
                ))}
            </div>

            <Footer />
        </div>

    )
}

export default Portfolio