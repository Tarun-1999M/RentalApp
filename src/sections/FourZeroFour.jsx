import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroMessage from "../components/HeroMessage"

const FourZeroFour = () => {
  return (
    <div className='bg-beach bg-cover h-screen flex justify-center items-center'>
     <HeroMessage message="404" caption="Page Not Found"
     label="RETURN HOME"
     destination={"/"}
     />
    </div>
  )
}

export default FourZeroFour
