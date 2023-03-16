//=============================== Composant Home ==========================

import React from 'react';
import Footer from '../footer';
import HeaderCarrousel from '../header_carrousel';
import Competences from '../competences/competences'
import Portfolio from '../portfolio/portfolio'
import Contact from '../contact/contact'


const Home = () => {

  return (
    <div>
        
        <div className='bg-lime-400 bg-cover h-[70vh] flex justify-center items-center p-5 flex-col pb-12'>
            <div className='flex flex-col mb-12 text-center'>
              <h2 className=' text-5xl text-slate-200 uppercase mb-4'>Florent Rivière</h2>
              <h1 className='text-slate-800 text-4xl'>Développeur Web</h1>
            </div>
  
        </div>

        < HeaderCarrousel/>

        <div className='bg-slate-800 w-[85%] mb-12 mx-auto p-3 rounded-lg'>
          <p className='p-8 text-2xl text-center text-lime-400'>
            Ancien militaire reconverti dans le monde du web, je cherche à me former et acquérir des compétences en tant que Développeur Web.
          </p>

        </div>

        < Competences />

        < Portfolio />

        < Contact />

        < Footer/>
    
    </div>
  );
};

export default Home;
