//=============================== Composant Home ==========================

import React from 'react';
// import Header from '../header';
import Footer from '../footer';
import HeaderCarrousel from '../header_carrousel';


const Home = () => {

  return (
    <div>
        
        <div className='bg-lime-500 h-[60vh] flex justify-center items-center p-5 flex-col pb-12'>
            <div className='flex flex-col justify-center items-center mb-12 text-4xl'>
              <h1>Développeur Web</h1>
              <h2>Florent Rivière</h2>
            </div>
            <p>
            Ancien militaire reconverti dans le monde du web, je cherche à me former et acquérir des compétences en tant que Développeur Web Front-end .
            </p>
        </div>

        < HeaderCarrousel/>

        < Footer/>
    
    </div>
  );
};

export default Home;
