import React from "react";
import Footer from "../footer";
import Back from "../back"

const Competences = () => {

    return(
        <div>
            <h1 className="text-center text-xl text-lime-500 uppercase bg-slate-600 p-4">Competences</h1>

            <div className="bg-lime-200 w-full h-32 flex justify-center items-center">
                <p className="bg-red-200">
                    Competences
                </p>
            </div>

            <Back />

            <Footer />
        </div>

    )
}

export default Competences