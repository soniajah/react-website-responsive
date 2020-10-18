import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'  


function SignUp() {
  return (
    <>  
    <h1>Sign Up</h1>  
    <Pricing />
    <Pricing />
    <HeroSection {...homeObjFour} />
    </>
  )
}

export default SignUp
