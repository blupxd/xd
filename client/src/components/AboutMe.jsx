import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import slika from '../images/21004063.jpg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { openForm } from '../actions/contactAction';
import { useDispatch } from 'react-redux';

const AboutMe = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null)
  const isInView1 = useInView(ref1, { triggerOnce: true });
  const isInView2 = useInView(ref2, { triggerOnce: true });
  const isInView3 = useInView(ref3, { triggerOnce: true });
  const controls1 = useAnimation();
  const dispatch = useDispatch()
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  useEffect(() => {
    if (isInView1) {
      controls1.start('visible');
    }
    if (isInView2) {
      controls2.start('visible');
    }
    if (isInView3) {
        controls3.start('visible');
      }
  }, [isInView1, isInView2,isInView3]);

  return (
    <div id="about-me" className='relative'>
      <div className='flex flex-col relative'>
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={controls1}
          transition={{ duration: 0.5, delay: 0.25 }}
          className='h-96 flex sticky top-0 justify-center items-center'
        >
          <h2 className='text-6xl my-auto text-center text-pink-700 font-bold'>
            Abo
            <ReactTyped strings={['ut me']} typeSpeed={80} loop />
          </h2>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 sticky top-0'>
          <div className='bg-pink-700 '>
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={controls2}
              transition={{ duration: 0.5, delay: 0.25 }}
              className='flex flex-col justify-top py-12 text-center items-center px-24 gap-4'>
              <div className='w-48 h-48 rounded-full overflow-hidden bg-white'>
                <img src={slika} alt='slika' className='object-cover w-full h-full' />
              </div>
              <h1 className='text-3xl text-white font-semibold'>
                Hello, I'm Matija
              </h1>
              <p className='text-md text-white'>
                I am a versatile webdeveloper and I thrive on turning ideas into reality through creative problem-solving and innovative thinking.
              </p>
              <div className='flex flex-row mt-12 text-xl items-center gap-4'>
                <a href='https://www.instagram.com/matijastefanovic5' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-500 transition-all duration-300 '>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://github.com/blupxd' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-500 transition-all duration-300 '>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-500 transition-all duration-300 '>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <a href='mailto:matijabusiness@gmail.com' className='text-white/30 text-sm flex items-center gap-2'>
                <FontAwesomeIcon icon={faEnvelope} />
                matijastefanovicbusiness@gmail.com
              </a>
            </motion.div>
          </div>
          <div className='bg-gray-200 border-t border-gray-300'>
            <motion.div
              ref={ref3}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={controls3}
              transition={{ duration: 0.5, delay: 0.25 }}
              className='flex flex-col text-justify py-12 items-center px-12 gap-12'>
              <h1 className='text-3xl text-gray-800 font-semibold'>Skills</h1>
              <p className='text-lg text-gray-500'>
                Hello! I'm an experienced web developer specializing in crafting bespoke online solutions. Proficient in technologies like React, Node.js, MongoDB, CMS integration, RESTful APIs, Express, and Tailwind CSS, I bring a wealth of expertise to help businesses thrive in the digital landscape. Let's collaborate to build a strong online presence for your brand and foster growth together.
              </p>
              <button onClick={() =>{
              dispatch(openForm('OPEN'))}} className='px-4 py-2 text-pink-700 font-semibold hover:bg-pink-700 hover:text-white transition-all duration-300 border border-pink-700'>Contact me</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
