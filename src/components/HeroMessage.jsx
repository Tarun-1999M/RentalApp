import React from 'react'
import { NavLink } from 'react-router-dom'
const HeroMessage = ({message,caption,label,destination}) => {
  return (
    
       <div className='bg-[#a39d9d] w-[fit-content] h-[fit-content] bg-opacity-50 text-white bold flex flex-col items-center gap-5 justify-center p-9 rounded-xl shadow-2xl'>
          <div className='text-8xl'>{message}</div>
          <div className='h-1.5 w-full bg-[#3f4389]'></div>
          <div className='text-5xl'>{caption}</div>
          <div className='p-5 bg-[#3f4389] cursor-pointer'><NavLink to={destination}>{label}</NavLink></div>
      </div>
    
  )
}

export default HeroMessage
