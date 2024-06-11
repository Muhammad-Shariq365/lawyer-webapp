'use client'

import CorruptionIcon from '../../public/assets/img/skills/skill1.png';
import EmploymentIcon from '../../public/assets/img/skills/skill2.png';
import RealEstateIcon from '../../public/assets/img/skills/skill3.png';
import TaxesIcon from '../../public/assets/img/skills/skill4.png';
import CorporateIcon from '../../public/assets/img/skills/skill5.png';
import BankingIcon from '../../public/assets/img/skills/skill6.png';
import Image from 'next/image';
import Team from './Team'

const services = [
  {
    icon: CorruptionIcon,
    title: "Corruption",
    description1: "Providing expert legal assistance",
    description2: "in corruption cases.",
  },
  {
    icon: EmploymentIcon,
    title: "Employment",
    description1: "Comprehensive legal services",
    description2: "for employment-related issues.",
  },
  {
    icon: RealEstateIcon,
    title: "Real Estate",
    description1: "Guidance through real estate",
    description2: "transactions and disputes.",
  },
  {
    icon: CorporateIcon,
    title: "Corporate",
    description1: "Expert legal support for corporate",
    description2: "matters and business law.",
  },
  {
    icon: TaxesIcon,
    title: "Taxes",
    description1: "Navigating the complexities of",
    description2: "tax law and regulations.",
  },
  {
    icon: BankingIcon,
    title: "Banking",
    description1: "Providing expert legal advice on",
    description2: "banking regulations and compliance.",
  }
  
];


import React from 'react'

const about = () => {
  return (
    <section id='about' className='section bg-slate-100 pb-32 pt-20'>
        <div className='container mx-auto text-center'>
            <h2 className='text-5xl font-primary font-extrabold mb-4'>
            What we do
            </h2>
            <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
            At our law firm, we provide expert legal services in corruption, employment, real estate, corporate law, and tax matters. Our dedicated team delivers personalized solutions and robust representation for every client. We pride ourselves on professionalism, integrity, and commitment to justice. Whether facing legal challenges or seeking guidance, we are here to support you. Trust us to navigate the complexities of law with confidence.
            </p>
            <div className='lg:grid lg:grid-cols-3 gap-12'>
            {services.map((item, index) => {
    const { icon, title, description1, description2 } = item;
    return (
        <div key={index} className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'>
            <Image src={icon} alt=''/>
            <h4 className='text-2xl mb-2 font-primary font-bold'>
                {title}
            </h4>
            <p className='max-w-[332px] lg:max-w-[350px]'>
                {description1}
            </p>
            <p className='max-w-[332px] lg:max-w-[350px]'>
                {description2}
            </p>
        </div>
    );
})}

            </div>
        </div>
       
    </section>
  );
};

export default about;
