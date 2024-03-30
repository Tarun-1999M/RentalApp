import React from 'react'
import HeroMessage from '../components/HeroMessage'

const Rooms = () => {
  return (
    <div className='bg-roomsHero w-full h-[500px] bg-cover bg-center mx-auto flex justify-center items-center'>
      <HeroMessage 
      message="Our Rooms"
      label="RETURN HOME"
      destination="/"
      />
    </div>
  )
}

export default Rooms
