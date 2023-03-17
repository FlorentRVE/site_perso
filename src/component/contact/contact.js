import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    return(
        <div className="bg-lime-200">
            <h1 id="contact" className="text-center text-4xl text-lime-400 uppercase bg-slate-800 p-4 mb-10">Contact</h1>

            <div className="flex flex-col md:flex-row">
                <div className="p-5 w-3/4 rounded-xl mx-auto md:max-w-screen-lg">
                    <Link to={"mailto:florent.rve@gmail.com"} target={"_blank"}>
                        <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl hover:scale-105 hover:shadow-md hover:brightness-110">
                            <p className="text-lime-400 font-extrabold text-2xl w-56 pl-3">Mail</p>
                            <img alt="" src="images/mail.png"/>

                        </div>
                    </Link>

                    <Link to={"https://www.instagram.com/"} target={"_blank"}>
                        <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl hover:scale-105 hover:shadow-md hover:brightness-110">
                            <p className="text-lime-400 font-extrabold text-2xl w-56 pl-3">Instagram</p>
                            <img alt="" src="images/instagram.png"/>

                        </div>
                    </Link>

                    <Link to={"https://www.linkedin.com"} target={"_blank"}>
                        <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl hover:scale-105 hover:shadow-md hover:brightness-110">
                            <p className="text-lime-400 font-extrabold text-2xl w-56 pl-3">Linkedin</p>
                            <img alt="" src="images/linkedin.png"/>

                        </div>
                    </Link>

                    <Link to={"https://www.github.com"} target={"_blank"}>
                        <div className="flex justify-around items-center bg-slate-800 mb-2 rounded-xl hover:scale-105 hover:shadow-md hover:brightness-110">
                            <p className="text-lime-400 font-extrabold text-2xl w-56 pl-3">GitHub</p>
                            <img alt="" src="images/github.png"/>

                        </div>
                    </Link>

                </div>

                <div className="flex justify-center md:mt-[300px]">
                    <img alt="" src="images/competences.png" className="w-44 h-44 pr-9"/>
                    <img alt="" src="images/contact.png" className="w-44 h-44 pr-9 hover:-rotate-12 hover:-translate-x-12 transition-all"/>
                </div>

            </div>

        </div>

    )
}

export default Contact