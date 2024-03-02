import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openForm } from '../actions/contactAction'
import logo from '../images/logo.png'

const MobileNavbar = () => {
    const [activate, setActivate] = useState(false)
    const dispatch = useDispatch()
    const toggleMenu = () =>{
        setActivate(!activate)
    }
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div className='lg:hidden flex flex-col fixed z-50 w-screen'>
        <div className='bg-white text-pink-600 border-b-[2px] border-pink-700 text-4xl transition-all duration-300 hover:text-pink-700 px-4 py-4 flex items-center justify-between'>
        <div className='my-4'>
            <button onClick={() => {
              scrollToSection('home')
              }}>
                <img src={logo} alt="logo" width="40px"/>
              </button>
        </div>
            {activate ? <FontAwesomeIcon onClick={toggleMenu} className='cursor-pointer' icon={faClose}/>
                : <FontAwesomeIcon onClick={toggleMenu} className='cursor-pointer' icon={faBars}/>}
        </div>

        <ul className={`${activate ? 'flex flex-col' : 'hidden' } text-2xl text-pink-700 p-12 gap-12 text-center bg-white items-center justify-center`}>
          <li className='navigacija'>
            <button onClick={() => {
              toggleMenu()
              scrollToSection('home')
              }}>
              Home
            </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('offer')}>
              Offer
            </button>
          </li>
            <li className='navigacija'>
              <button onClick={() => {
              toggleMenu()
              scrollToSection('projects')
              }}>
                Projects
              </button>
            </li>
            <li className='navigacija'>
              <button onClick={() => {
              toggleMenu()
              scrollToSection('about-me')
              }}>
                About me
              </button>
            </li>
            <li>
            <button onClick={() =>{
              toggleMenu()
              dispatch(openForm('OPEN'))}}
              className="px-4 py-2 flex lg:hidden border font-semibold border-pink-700 text-md text-pink-700 hover:border-pink-700 hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out"
            >
              Contact me
            </button>
            </li>
          </ul>
    </div>
  )
}

export default MobileNavbar