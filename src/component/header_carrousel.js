//=============================== Header ==========================

import React from 'react';
import { Carousel } from 'react-carousel3';
import { Link } from 'react-router-dom';
import styles from "../css/header_carrousel.module.css"


const HeaderCarrousel = () => {
  
  return (
    <header>
        <div className={styles.marginTop}>
            <Carousel height={260} width={'100%'} yOrigin={32} yRadius={32}>

                <Link to='/competences'>
                    <div key={1} className="w-52 h-52 ">
                        <img alt="" src="/images/perso.png" className='w-full h-32 bg-black shadow-md'/>
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
