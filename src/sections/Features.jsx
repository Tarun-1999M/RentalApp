import React from 'react'
import { RoomsData } from '../Context'
import Title from '../components/Title'
import Room from "../components/Room"

const Features = () => {
  //console.log(RoomsData())
    const {rooms,featuredRooms,sortedRooms,loading} = RoomsData().state
    
  return (
    
      <div className='text-center p-9'>
      <Title title="Featured Rooms"/>
      <div className='grid grid-cols-3 gap-4'>
      {
      featuredRooms.map((room,index)=>(
        <Room key={index} room={room}/>
      ))
    }
    </div>
      </div>
    
  )
}

export default Features
