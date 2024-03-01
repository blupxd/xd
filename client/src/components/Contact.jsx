import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../actions/contactAction';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.contactForm.open);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const res = axios.post('https://matijastefanovicbackend.vercel.app', {
        name: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        text: formData.message
      })
    } catch (error) {
      console.log(error)
    }
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    dispatch(closeForm('CLOSE'));
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            zIndex: 200,
          }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(closeForm('CLOSE'));
          }}
          className='fixed inset-0 flex justify-center items-center bg-black/30'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-lg p-8 w-3/4'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-2xl text-center text-pink-700 font-bold mb-4'>
              Contact me
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='firstName' className='block text-pink-500 mb-1'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-full border border-gray-300 focus:outline-0 rounded-md p-2'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='lastName' className='block text-pink-500 mb-1'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='w-full border border-gray-300 focus:outline-0 rounded-md p-2'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-pink-500 mb-1'>
                  E-mail
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full border border-gray-300 focus:outline-0 rounded-md p-2'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-pink-500 mb-1'>
                  Message
                </label>
                <textarea
                  id='message'
                  style={{ resize: 'none' }}
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full border border-gray-300 focus:outline-0 rounded-md p-2'
                  rows='4'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition-all duration-300'
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
