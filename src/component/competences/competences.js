import React from "react";
import Footer from "../footer";
import Back from "../back"

const Competences = () => {

    return(
        <div className="bg-lime-200">
            <h1 className="text-center text-xl text-lime-500 uppercase bg-slate-600 p-4">Competences</h1>

            <div className="flex justify-center items-center gap-4 p-6 peer">

                <div className="bg-red-300 p-4 hover:bg-red-400 h-60 w-3/4 rounded-lg hover:shadow-md">
                    <h2 className="bg-yellow-200 uppercase">Frontend</h2>
                    <p>HTML/CSS</p>
                    <p>TailwindCSS</p>
                    <p>SASS</p>
                    <p>Javascript</p>
                    <p>React</p>

                </div>

                <div className="bg-blue-300 p-4 hover:bg-blue-400 h-60 w-3/4 rounded-lg hover:shadow-md">
                    <h2 className="bg-yellow-200 uppercase">Backend</h2>
                    <p>PHP</p>
                    <p>Symfony</p>
                    <p>NodeJS</p>

                </div>


            </div>

            <div className="w-44 h-44 mt-[-90px] mb-28 mx-auto">
                <img alt="ii" src="images/competences.png" className=""/>

            </div>

            <div className="bg-purple-300 p-4 hover:bg-purple-400 w-3/4 rounded-t-lg my-0 mx-auto">
                    <h2 className="bg-yellow-200 uppercase">Autres</h2>
                    <p>Base en réseau</p>
                    <p>Git / GitHub</p>
                    <p>Linux</p>

                </div>

            <Back />

            <Footer />
        </div>

    )
}

export default Competences