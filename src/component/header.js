//=============================== Header ==========================

import React from 'react';
import { Link } from 'react-router-dom';

// Utilisation de pathname pour souligner le texte du menu selon la page visitée.

const Header = () => {
  
  return (
    <header>
      <nav className='flex items-center justify-around bg-black text-white uppercase h-14 text-xs'>

            <p className='mr-2 hover:text-lime-500'>
                <Link to="/">Accueil</Link>
            </p>

            <p className='mr-2 hover:text-lime-500'>
                <Link to="/competences">Competences</Link>
            </p>

            <p className='mr-2 hover:text-lime-500'>
                <Link to="/portfolio">Portfolio</Link>
            </p>

            <p className='mr-2 hover:text-lime-500'>
                <Link to="/contact">Contact</Link>
            </p>
      
      </nav>
    </header>
  );
}

export default Header;
