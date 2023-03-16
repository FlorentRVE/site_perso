import React from "react";

const Contact = () => {

    return(
        <div className="bg-lime-200">
            <h1 id="contact" className="text-center text-4xl text-lime-400 uppercase bg-slate-800 p-4 mb-10">Contact</h1>

            <div className="flex flex-col md:flex-row">
                <div className="p-5 w-3/4 rounded-xl mx-auto md:max-w-screen-lg">
                    <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl">
                        <p className="text-lime-400 font-extrabold text-2xl">Mail</p>
                        <img alt="" src="images/mail.png" className=""/>

                    </div>

                    <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl">
                        <p className="text-lime-400 font-extrabold text-2xl">Instagram</p>
                        <img alt="" src="images/instagram.png"/>

                    </div>

                    <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl">
                        <p className="text-lime-400 font-extrabold text-2xl">Linkedin</p>
                        <img alt="" src="images/linkedin.png"/>

                    </div>

                </div>

                <div className="flex justify-center md:mt-52">
                    <img alt="" src="images/competences.png" className="w-44 h-44 pr-9"/>
                    <img alt="" src="images/contact.png" className="w-44 h-44 pr-9"/>
                </div>

            </div>

        </div>

    )
}

export default Contact