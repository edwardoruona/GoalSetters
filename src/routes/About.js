import React from 'react'
import AboutContent from '../components/AboutContent';
import NavBar from "../components/NavBar" ;
import Hero2 from "../components/Hero2"  ;
import Footer from "../components/Footer" ;

const about = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="About Us" text="we specializes in creating smart and responsive website and app" />
      <AboutContent/>
      <Footer/>
      </div>
  )
}

export default about