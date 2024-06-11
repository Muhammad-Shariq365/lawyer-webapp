'use client'

import React from 'react';
import Lawyer from '../../public/lawyer_banner.png';
import Image from 'next/image';
import Appointment from './Appointment';
import Testimonials from '../components/Testimonials';
import Whatwedo from './about';

const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'
    >
      <div className='flex flex-col md:flex-row justify-end items-center '>
        <div className=' pt-32'>
          <div className=' text-center mx-auto h-full lg:text px-8 md:p-0'>
            <h1 className='font-primary font-black text-6xl lg:text-7xl text-slate-900 mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
              Your Problem <br />
              <span className='text-yellow-600'>
                Our Goal
              </span>
            </h1>

            <div className='flex justify-center items-center'>
              <p className=' lg:flex lg:w-1/2 items-center justify-center'>
                The law firm, a bastion of legal expertise and integrity, stands as a beacon of justice in the community. With a legacy built on years of dedicated service, it commands respect and trust from clients and peers alike. From its distinguished banner, adorned with the firm&apos;s name and emblem, to its meticulously curated online presence, every aspect reflects a commitment to excellence.
              </p>
              <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'></div>
            </div>
          </div>
        </div>

        <Image src={Lawyer} alt='picture' width={300} height={300} className='mt-24' />
      </div>
      <div className='flex flex-col md:flex-row justify-center pt-10 md:pt-20 w-[70%] mx-auto md:space-x-40 space-y-8 md:space-y-0'>
        <Appointment />
        <div className=' flex items-center'>
          <Testimonials />
        </div>
      </div>
      <Whatwedo />
    </section>
  );
};

export default Banner;
