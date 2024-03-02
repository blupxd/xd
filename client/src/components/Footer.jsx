import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { openForm } from '../actions/contactAction';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const dispatch = useDispatch()
  return (
    <div className='py-32 bg-black text-white'>
      <div className='grid  grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-12'>
      <div className='flex flex-col text-md items-center gap-4 text-left'>
        <h3 className='text-gray-500 font-semibold'>Socials</h3>
            <div className='flex flex-col items-start gap-4'>
                <a href='https://www.instagram.com/matijastefanovic5' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <a href='https://github.com/blupxd' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                <a href='https://www.linkedin.com/in/matija-stefanovic-92a9781aa/' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </div>
        </div>
        <div className='flex flex-col text-center gap-4 justify-center items-center'>
            <h3 className='text-gray-500 font-semibold'>Links</h3>
            <ul className='flex text-sm text-gray-600 flex-col gap-4'>
                <li className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                    <button onClick={() => scrollToSection('home')}>
                    Home
                    </button>
                </li>
                <li className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                    <button onClick={() => scrollToSection('offer')}>
                    Offer
                    </button>
                </li>
                <li className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                    <button onClick={() => scrollToSection('projects')}>
                    Projects
                    </button>
                </li>
                <li className='text-gray-700 hover:text-pink-500 transition-all duration-300 '>
                    <button onClick={() => scrollToSection('about-me')}>
                    About me
                    </button>
                </li>
                <li>
                    <button
                    onClick={() =>{
                      dispatch(openForm('OPEN'))}}
                    className='px-4 py-2 lg:flex hidden border font-semibold border-pink-700 text-md text-pink-700 hover:border-pink-700 hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out'
                    >
                    Contact me
                    </button>
                </li>
            </ul>
        </div>
        <div className='col-span-1 lg:col-span-2 text-center gap-4'>
                <h3 className='text-gray-900 font-semibold'>© 2024 Matija Stefanovic.</h3>
            </div>
      </div>
    </div>
  );
};

export default Footer;
