'use client';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', formData);
      console.log('Email sent successfully');
      
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your appointment request has been sent successfully!'
      });

      // Optionally, reset form fields
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.'
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='bg-amber-500 w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto mt-5 shadow-lg'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center mb-4'>
        Get an appointment
      </h3>
      <div className="space-y-4 flex flex-col justify-center">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-control w-full rounded-sm p-2 outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Full name"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="form-control w-full rounded-sm p-2 outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Phone number"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="form-control w-full rounded-sm p-2 outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Email Address"
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-control resize-none w-full h-[132px] rounded-sm p-2 outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-neutral"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
