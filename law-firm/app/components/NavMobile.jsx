"use client"

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import navigation from "./data";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <nav className="lg:hidden relative z-20">
      <button onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu />
      </button>
      <ul
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-slate-950 fixed top-0 w-full 
      h-screen text-white transition-all flex 
      flex-col justify-center items-center space-y-8 text-lg`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-14 left-6">
          <IoMdClose />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link} className='cursor-pointer'>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;