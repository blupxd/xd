import { faAngleDoubleDown, faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ReactTyped } from "react-typed";

const Welcome = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="home" className='p-4 h-[700px] flex items-center justify-center bg-gray-950 border-b-[5px] flex flex-col relative pb-4 border-pink-700'>
      <h1 className='w-3/4 h-72 lg:h-48 lg:w-3/5 text-6xl font-bold text-white text-center lg:mb-8'>
        Hi, my name
        {" "}
        <ReactTyped strings={[" is Matija! Let's work together!"]} typeSpeed={80} loop />
      </h1>
      <button onClick={() => scrollToSection('projects')} className="px-4 py-2 border font-semibold border-pink-700 text-lg lg:text-xl text-pink-700 hover:border-pink-700 hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out absolute bottom-12 lg:bottom-32">
        View Projects <FontAwesomeIcon className='animirano' icon={faAngleDoubleDown} />
      </button>
    </div>
  );
};

export default Welcome;
