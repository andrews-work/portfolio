import React, { useState, useEffect } from 'react';
import Desktop from './Components/Desktop';
import Mobile from '../Mobile/Mobile';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      {isDesktop ? <Desktop /> : <Mobile />}
    </div>
  );
};

export default Home;
