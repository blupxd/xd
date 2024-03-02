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
            className='text-yellow-500 text-3xl'>
            <FontAwesomeIcon className='animirano' icon={faAngleDoubleUp} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
