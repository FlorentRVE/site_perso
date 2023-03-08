import Home from './component/home/home';
import Error from './component/error';
import Portfolio from './component/portfolio/portfolio';
import Contact from './component/contact/contact';

import {createBrowserRouter} from "react-router-dom";

// Affectation des routes au endpoint correspondant avec page d'erreur par défaut
  
  const router = createBrowserRouter([
    
    { path: "/", element: <Home />},

    { path: "/portfolio", element: <Portfolio />},

    { path: "/contact", element: <Contact />},

    { path: "/404", element: <Error />}

  ]);

export default router;

