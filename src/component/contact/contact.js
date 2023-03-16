import React from "react";
// import Footer from "../footer";
// import Back from "../back"

const Contact = () => {

    return(
        <div className="bg-lime-200">
            <h1 id="contact" className="text-center text-4xl text-lime-400 uppercase bg-slate-800 p-4 mb-10">Contact</h1>

            <div className="flex flex-col">
                <div className="p-5">
                    <form className="flex flex-col gap-2 bg-slate-800 rounded-lg p-8 md:w-3/4 md:my-0 md:mx-auto font-bold">

                        <div className="flex flex-col mb-3 text-lime-400 text-lg">
                            <label className="" htmlFor="name">
                                Name
                            </label>
                            <input className="h-10 rounded-lg" type="text" id="name" required />
                        </div>

                        <div className="flex flex-col mb-3 text-lime-400 text-lg">
                            <label className="" htmlFor="email">
                                Email
                            </label>
                            <input className="h-10 rounded-lg" type="email" id="email" required />
                        </div>

                        <div className="flex flex-col mb-3 text-lime-400 text-lg">
                            <label className="" htmlFor="message">
                                Message
                            </label>
                            <textarea className="rounded-lg h-20" id="message" required />
                        </div>

                        <button className="bg-slate-200 text-slate-800 h-10 rounded-lg w-52 self-end hover:bg-lime-400 text-xl" type="submit">Envoyer</button>
                    </form>
                </div>

                <div className="flex justify-center">
                    <img alt="" src="/images/competences.png" className="w-44 h-44 pr-9"/>
                    <img alt="" src="/images/contact.png" className="w-44 h-44 pr-9"/>
                </div>

            </div>

        </div>

    )
}

export default Contact