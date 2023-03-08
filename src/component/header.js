//=============================== Header ==========================

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Utilisation de pathname pour souligner le texte du menu selon la page visitée.

const Header = () => {
  
  const { pathname } = useLocation();

  return (
    <header>

      <nav>

        <div className='flex'>

            <p>
                <Link to="/" style={{ textDecoration: pathname === '/' ? 'underline' : 'none' }}>Accueil</Link>
            </p>

            <p>
                <Link to="/" style={{textDecoration: 'none'}}>A Propos</Link>
            </p>

            <p>
                <Link to="/" style={{textDecoration: 'none'}}>Competences</Link>
            </p>

            <p>
                <Link to="/portfolio" style={{ textDecoration: pathname === '/portfolio' ? 'underline' : 'none' }}>Portfolio</Link>
            </p>

            <p>
                <Link to="/contact" style={{ textDecoration: pathname === '/contact' ? 'underline' : 'none' }}>Contact</Link>
            </p>
        </div>
        
      </nav>
    </header>
  );
}

export default Header;
