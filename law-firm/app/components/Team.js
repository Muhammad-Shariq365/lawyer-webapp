'use client'
import React from 'react';
import images from '../components/images'; // Importing the images array
import Image from 'next/image'; // Importing Next.js Image component

const Team = () => {
  return (
    <section id="team" className='section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4 pt-20'>Our Attorneys</h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
          "Our attorney section features a team of seasoned experts dedicated to delivering tailored counsel across various practice areas. Trust our track record of success and commitment to client satisfaction for all your legal needs."
        </p>
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-[30px]'>
          {images.map((item, index) => ( // Mapping over the images array
            <div key={index} className="mb-8">
              {/* Using the Next.js Image component */}
              <Image src={item.src} alt={item.alt} width={300} height={300} className="mx-auto" />
              <h4 className='text-2xl mb-2 font-medium'>
              {item.name}
              </h4>
              <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>
                {item.position}
              </p>
              <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0 text-center'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
