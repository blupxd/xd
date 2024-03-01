import { faHandshake, faHomeAlt, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openForm } from '../actions/contactAction'

const Navbar = () => {

  const dispatch = useDispatch()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      zIndex: 100
    }} className='py-6 bg-white border-b-[2px] border-pink-700 sticky top-0 hidden lg:flex lg:flex-row justify-between px-24 items-center'>
      <div className='bg-pink-700 px-4 border-b-[5px] border-pink-400 py-2 text-xl font-semibold text-white '>
            <button onClick={() => {
              scrollToSection('home')
              }}>Matija's Portfolio</button>
        </div>
      <div className="lg:flex lg:flex-inline lg:gap-2 flex flex-col">
        <ul className='flex flex-col lg:text-lg lg:relative absolute md:text-md gap-y-12 lg:flex-row lg:gap-12 text-pink-700 font-semibold'>
          <li className='navigacija'>
          <button onClick={() => scrollToSection('home')}>
            <FontAwesomeIcon icon={faHomeAlt} /> Home
          </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('offer')}>
              <FontAwesomeIcon icon={faHandshake} /> Offer
            </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('projects')}>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('about-me')}>
              <FontAwesomeIcon icon={faUser} /> About me
            </button>
          </li>
        </ul>
      </div>

      <div className='ml-12'>
        <button onClick={() => dispatch(openForm('OPEN'))}
          className="px-4 py-2 lg:flex hidden border font-semibold border-pink-700 text-md text-pink-700 hover:border-pink-700 hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out"
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
