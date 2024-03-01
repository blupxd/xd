import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faLink } from '@fortawesome/free-solid-svg-icons';

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
          className={`flex flex-col sticky top-0 md:flex-row overflow-hidden relative z-10 ${isInView2 ? 'even:flex-row-reverse' : 'odd:flex-row'}`}
        >
          <div className="relative w-full md:w-1/2 h-96 overflow-hidden group">
            <img
              src="https://www.site-shot.com/cached_image/QK0jPNZBEe60YQJCrBEAAg" 
              alt="Projekat 1"
              className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="border-pink-700 border-[2px] text-pink-700 font-bold hover:bg-pink-700 hover:text-white trainsition-all duration-300 py-2 px-4">
                View website
              </a>
            </div>
          </div>
          <div className="p-12">
            <h3 className="text-4xl text-yellow-300 font-semibold mb-2 flex items-center">
              Projekat 1<FontAwesomeIcon className='ml-4 text-2xl' icon={faArrowUpRightFromSquare} />
              </h3>
            <p className="text-gray-600">Opis projekta 1...</p>
            <a href="#" className="text-pink-700 mt-2 block hover:underline">
              Visit website
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
