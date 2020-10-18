import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'  


function Services() {
  return (
    <> 
    <h1>Services</h1>   
    <Pricing />
    <HeroSection {...homeObjFour} />
    </>
  )
}

export default Services
