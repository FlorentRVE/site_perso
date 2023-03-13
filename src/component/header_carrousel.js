//=============================== Header ==========================

import React from 'react';
import { Carousel } from 'react-carousel3';
import { Link } from 'react-router-dom';

// Utilisation de pathname pour souligner le texte du menu selon la page visitée.

const HeaderCarrousel = () => {
  
  return (
    <header>
        <div className='flex '>
        <Carousel height={260} width={'100%'} yOrigin={32} yRadius={32}>

            <Link to='/'>
                <div key={1} className="w-52 h-52">
                    <img alt="" src="https://florent-rve.fr/image/background.jpg" />
                    <p className='text-center'>Competences</p>
                </div>
            </Link>

            <Link to='/portfolio'>
                <div key={1} className="w-52 h-52">
                    <img alt="" src="https://florent-rve.fr/image/background.jpg" />
                    <p className='text-center'>Portfolio</p>
                </div>
            </Link>

            <Link to='/contact'>
                <div key={1} className="w-52 h-52">
                    <img alt="" src="https://florent-rve.fr/image/background.jpg" />
                    <p className='text-center'>Contact</p>
                </div>
            </Link>

        </Carousel>

        </div>

 
      
    </header>
  );
}

export default HeaderCarrousel;
