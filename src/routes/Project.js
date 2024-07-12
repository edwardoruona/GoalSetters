import React from 'react'

import NavBar from "../components/NavBar" ;
import Hero2 from "../components/Hero2";
import Work from "../components/Work";
import Pricing from "../components/Pricing" ;
import Footer from "../components/Footer" ;


const project = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="Project" text="some of my recent works" />
      <Work/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default project