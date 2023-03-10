import React from "react";
import Footer from "../footer";
import Back from "../back"

const Contact = () => {

    return(
        <div>
            <h1 className="text-center text-xl text-lime-500 uppercase bg-slate-600 p-4">Contact</h1>

            <div className="flex flex-col">
                <div className="bg-lime-200 p-5">
                    <form className="flex flex-col gap-2 bg-blue-600 rounded-lg p-8">

                        <div className="flex flex-col mb-3">
                            <label className="" htmlFor="name">
                                Name
                            </label>
                            <input className="h-10 rounded-lg" type="text" id="name" required />
                        </div>

                        <div className="flex flex-col mb-3">
                            <label className="" htmlFor="email">
                                Email
                            </label>
                            <input className="h-10 rounded-lg" type="email" id="email" required />
                        </div>

                        <div className="flex flex-col mb-3">
                            <label className="" htmlFor="message">
                                Message
                            </label>
                            <textarea className="rounded-lg h-20" id="message" required />
                        </div>

                        <button className="bg-red-500 h-10 rounded-lg" type="submit">Envoyer</button>
                    </form>
                </div>

                <div className="h-52 bg-slate-400">
                    <p>Image à ajouter</p>
                </div>

            </div>

            <Back />

            <Footer />
        </div>

    )
}

export default Contact