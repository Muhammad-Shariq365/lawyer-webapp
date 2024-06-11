"use client";

import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="hidden lg:flex justify-center">
      <ul className="lg:flex space-x-6 font-body font-semibold text-sm text-gray-900">
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            Our Team
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
