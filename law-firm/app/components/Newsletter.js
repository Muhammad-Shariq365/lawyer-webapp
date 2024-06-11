'use client'


import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from '../components/footer';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/subscribe', { emailAddress: email });
      console.log('Subscription request sent successfully');

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Subscribed',
        text: 'You have successfully subscribed to our newsletter!',
      });

      // Optionally, clear the input field
      setEmail('');
    } catch (error) {
      console.error('Failed to send subscription request:', error);

      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className='bg-amber-500 pt-[54px]'>
      <div className='container mx-auto px-8 text-center'>
        <h3 className='font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]'>
          Subscribe to our Newsletter
        </h3>
        <p className='mb-[40px] text-white text:md sm:text-lg'>
          Be first to get the latest news about us.
        </p>
        <form onSubmit={handleFormSubmit} className='flex flex-col items-center'>
          <input
            className='form-control mb-4 py-2 px-4 rounded-md'
            placeholder='your email address'
            type='email'
            value={email}
            onChange={handleInputChange}
          />
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md cursor-pointer transition-colors duration-300">
            Join
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Newsletter;
