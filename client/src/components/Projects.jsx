import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import aros from '../images/aros.png';
import alppro from '../images/alppro.png'

const Projects = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isInView2) {
      mainControls2.start("visible");
    }
  }, [isInView, isInView2]);

  const projectCard = (image, naziv, opis, link, index) => {
    const isEven = index % 2 === 0;
    const flexDirection = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
  
    return (
      <div className={`flex flex-col ${flexDirection} border-b-[2px] border-pink-700`}>
        <div className='relative w-full md:w-1/2 h-96 overflow-hidden group'>
          <img
            src={image} 
            alt={naziv}
            className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={link} className="border-pink-700 border-[2px] text-pink-700 font-bold hover:bg-pink-700 hover:text-white transition-all duration-300 py-2 px-4">
              View website
            </a>
          </div>
        </div>
        <div className="p-12 h-96 md:w-1/2 ">
          <h3 className="text-4xl text-yellow-300 font-semibold mb-2 flex items-center">
            {naziv}
          </h3>
          <p className="text-gray-600">{opis}</p>
          <a href={link} className="text-pink-700 mt-2 block hover:underline">
            Visit website <FontAwesomeIcon className='text-sm' icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className='flex flex-col'>
      <div className='bg-gray-200 py-24 h-[600px] flex items-center justify-center sticky top-0'>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={ref}
        >
          <h1 className="text-5xl lg:text-6xl text-gray-950 text-center font-bold">THESE ARE MY PROJECTS</h1>
        </motion.div>
      </div>
      <div className="bg-gray-950 grid-cols-1 w-full top-0 z-12 relative">
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls2}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`flex flex-col sticky top-0 relative z-10 ${isInView2 ? 'even:flex-row-reverse' : 'odd:flex-row'}`}
        >
          {projectCard(
            aros,
            'AROS Dekanti',
            'AROS Dekanti is a website that I have been working on using ReactJS and NodeJS backend to help the customer upload their perfumes with ease.',
            'https://arosdekant.vercel.app/',
            1
          )}
          {projectCard(
            alppro,
            'ALP-PRO Team',
            'ALP-PRO Team is a firm that does alpinism work. On this website I have used ReactJS and also ExpressJS server that connects to MongoDB and Firebase for image storage and data storage for uploading images onto their website',
            'https://alp-proteam.vercel.app/',
            2
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
