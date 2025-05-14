import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component to initialize AOS animations
const AnimationsInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return null;
};

export default AnimationsInit;