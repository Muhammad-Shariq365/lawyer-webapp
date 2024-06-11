'use client';

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Logo from "../../public/assets/logo.png";
import { useEffect, useState } from "react";
import '../../app/globals.css';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        bg ? 'bg-glass-bg backdrop-blur-md shadow-md' : 'bg-transparent'
      } py-2 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between lg:justify-around">
        <Link href="#">
          <Image className="w-14 h-14" src={Logo} alt="Logo" />
        </Link>
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
