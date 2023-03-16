import React from "react";
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
        <div id="portfolio" className="bg-slate-200 pb-20 ">

            <h1 className="text-center text-4xl text-lime-400 uppercase bg-slate-800 p-4 mb-10">Portfolio</h1>

            <div className="flex flex-col md:flex-row">
                {data.map((item) => (

                    <Link to={"https://florent-rve.fr/"} target={"_blank"} key={item.id}>
                        <div className="m-3 p-3 text-center rounded-lg hover:brightness-110 hover:scale-105">
                            <img src={item.img} alt={'presentation projet'} className="w-50 bg-yellow-800 p-3 rounded-lg hover:shadow-lg"/>
                            <h2 className="text-slate-800 uppercase text-lg">{item.title}</h2>
                            <p>{item.description}</p>

                        </div>
                    </Link>
                ))}
            </div>

            <div className="w-32 h-32 mx-auto">
                <img alt="ii" src="images/portfolio.png" className=""/>

            </div>
            
        </div>

    )
}

export default Portfolio