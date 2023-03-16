//=============================== Header ==========================

import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-carousel3';


const HeaderCarrousel = () => {
  
  return (
    <header>
        <div className="mt-[-170px] mb-12">
            <Carousel height={400} width={'100%'} yOrigin={32} yRadius={32}>

                <Link to='#competences'>
                    <div key={1} className="w-44 h-44 p-2 hover:scale-110">
                        <img alt="" src="images/competences.png" className=''/>
                        <h3 className='text-center text-xl uppercase'>Competences</h3>
                    </div>
                </Link>

                <Link to='#portfolio'>
                    <div key={1} className="w-44 h-44 p-2 hover:scale-110">
                        <img alt="" src="images/portfolio.png" />
                        <h3 className='text-center text-xl uppercase'>Portfolio</h3>
                    </div>
                </Link>

                <Link to='#contact'>
                    <div key={1} className="w-44 h-44 p-2 hover:scale-110">
                        <img alt="" src="images/contact.png" />
                        <h3 className='text-center text-xl uppercase'>Contact</h3>
                    </div>
                </Link>

            </Carousel>

        </div>

 
      
    </header>
  );
}

export default HeaderCarrousel;
