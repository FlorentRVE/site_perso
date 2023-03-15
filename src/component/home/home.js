//=============================== Composant Home ==========================

import React from 'react';
import Footer from '../footer';
import HeaderCarrousel from '../header_carrousel';


const Home = () => {

  return (
    <div>
        
        <div className='bg-[url("https://florent-rve.fr/image/background.jpg")] bg-cover h-[100vh] flex justify-center items-center p-5 flex-col pb-12'>
            <div className='flex flex-col justify-center items-center mb-12 text-6xl text-slate-200'>
              <h1>Développeur Web</h1>
              <h2>Florent Rivière</h2>
            </div>
            <p className='px-12 text-xl text-center'>
            Ancien militaire reconverti dans le monde du web, je cherche à me former et acquérir des compétences en tant que Développeur Web.
            </p>
        </div>

        < HeaderCarrousel/>

        < Footer/>
    
    </div>
  );
};

export default Home;
