import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import "./style.css"

const Layout = ({children}) => {
  return (
    <>
        <NavBar />
            {children}
        <Footer />
    </>
  )
}

export default Layout