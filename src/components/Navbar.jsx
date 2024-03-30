import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between cursor-pointer items-center bg-[#3f4389] text-white p-4 w-[100%]'>
      <h1 className='text-4xl'><NavLink to="/">Rental Buddy</NavLink></h1>
      <nav className='flex gap-4 list-none text-2xl text-bold'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rooms">Rooms</NavLink></li>
      </nav>
    </div>
  )
}

export default Navbar
