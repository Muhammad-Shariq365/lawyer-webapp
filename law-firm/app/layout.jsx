import React from 'react';
import Header from './components/Header'
import Banner from './components/Banner'
import Team from '../app/components/Team'
import Newsletter from './components/Newsletter'
import Contact from './components/contact'

const Layout = ({ children }) => {
  return (
    <html>
         <body>
          <Header />
          <Banner />
          <Team />
          <Contact />
          <Newsletter />
          
      

      
          {children}
          </body>
        </html>
  );
};

export default Layout;
