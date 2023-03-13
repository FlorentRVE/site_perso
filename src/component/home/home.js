//=============================== Composant Home ==========================

import React from 'react';
// import Header from '../header';
import Footer from '../footer';
import HeaderCarrousel from '../header_carrousel';


const Home = () => {

  return (
    <div>
        
        <div className='bg-lime-500 h-52 flex justify-center items-center'>
            <p>
                A propos de florent riviere développeur web en devenir
            </p>
        </div>

        < HeaderCarrousel/>

        < Footer/>
    
    </div>
  );
};

export default Home;
