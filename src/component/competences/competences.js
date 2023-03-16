import React from "react";

const Competences = () => {

    return(
        <div className="bg-lime-200">
            <h1 id="competences" className="text-center text-xl text-lime-500 uppercase bg-slate-800 p-4 mb-10">Competences</h1>

            <div className="flex justify-center items-center gap-4 p-6 peer">

                <div className="bg-slate-200 p-4 h-60 w-3/4 rounded-lg hover:shadow-md text-slate-800 hover:scale-105">
                    <h2 className="uppercase">Frontend</h2>
                    <p>HTML/CSS</p>
                    <p>TailwindCSS</p>
                    <p>SASS</p>
                    <p>Javascript</p>
                    <p>React</p>

                </div>

                <div className="bg-slate-800 p-4 h-60 w-3/4 rounded-lg hover:shadow-md text-slate-200 hover:scale-105">
                    <h2 className="uppercase">Backend</h2>
                    <p>PHP</p>
                    <p>Symfony</p>
                    <p>NodeJS</p>

                </div>


            </div>

            <div className="w-32 h-32 mt-[-80px] mb-20 mx-auto">
                <img alt="ii" src="images/competences.png" className=""/>

            </div>

            <div className="bg-lime-400 p-4 hover:scale-x-105 w-3/4 rounded-t-lg my-0 mx-auto">
                    <h2 className="uppercase">Autres</h2>
                    <p>Base en réseau</p>
                    <p>Git / GitHub</p>
                    <p>Linux</p>

                </div>

        </div>

    )
}

export default Competences