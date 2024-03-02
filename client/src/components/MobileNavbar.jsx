import { faBars, faClose, faHandshake, faHomeAlt, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openForm } from '../actions/contactAction'

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
          <div className='bg-pink-700 px-4 border-b-[5px] border-pink-400 py-2 text-xl font-semibold text-white '>
              <button onClick={() => {
                scrollToSection('home')
                }}>Matija's Portfolio</button>
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
              Home <FontAwesomeIcon icon={faHomeAlt} />
            </button>
          </li>
          <li className='navigacija'>
            <button onClick={() => scrollToSection('offer')}>
              Offer <FontAwesomeIcon icon={faHandshake} />
            </button>
          </li>
            <li className='navigacija'>
              <button onClick={() => {
              toggleMenu()
              scrollToSection('projects')
              }}>
                Projects <FontAwesomeIcon icon={faProjectDiagram} />
              </button>
            </li>
            <li className='navigacija'>
              <button onClick={() => {
              toggleMenu()
              scrollToSection('about-me')
              }}>
                About me <FontAwesomeIcon icon={faUser} />
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