import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Ottieni l'oggetto location

  useEffect(() => {
    // Quando la location cambia (cambio pagina), scrolla in cima alla pagina
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
