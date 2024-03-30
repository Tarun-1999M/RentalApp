import React from 'react'
import HeroMessage from '../components/HeroMessage'
import {Services} from "../sections"
const Hero = () => {
  return (

    <div>
    <div className='bg-beach bg-cover h-screen flex justify-center items-center'>
      <div>
      <HeroMessage message="Luxurious Rooms"
      caption="Deluxe Rooms Starting At $299"
      label="OUR ROOMS"
      destination={"/rooms"}
      />
      </div>
    </div>


    <div>
      <Services />
    </div>

    </div>
  )
}

export default Hero
