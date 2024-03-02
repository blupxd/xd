import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {showButton && (
        <div className='fixed bottom-12 right-8 lg:right-24 text-white z-50'>
          <button onClick={() => scrollToSection('home')}
            className='bg-yellow-500 w-12 h-12 rounded-full text-3xl'>
            <FontAwesomeIcon icon={faAngleDoubleUp} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
