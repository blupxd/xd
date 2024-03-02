import React from 'react'
import { useDispatch } from 'react-redux'
import { openForm } from '../actions/contactAction'
import logo from '../images/logo.png'

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
      <div className='my-4'>
            <button onClick={() => {
              scrollToSection('home')
              }}>
                <img src={logo} alt="logo" width="60px"/>
              </button>
        </div>
      <div className="lg:flex lg:flex-inline lg:gap-2 flex flex-col">
        <ul className='flex flex-col lg:text-lg lg:relative absolute md:text-md gap-y-12 lg:flex-row lg:gap-12 text-pink-700 font-semibold'>
          <li className='navigacija'>
          <button onClick={() => scrollToSection('home')}>
            Home
          </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('offer')}>
              Offer
            </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('about-me')}>
              About me
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
