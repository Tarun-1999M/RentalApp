import React from 'react'
import Room from './Room'
const RoomsList = ({rooms}) => {
    console.log(rooms)

 if(rooms.length===0){
    return(
        <div className='text-4xl text-center mt-[20px]'>
            <h1>Unfortunately, no rooms matched your search parameters</h1>
        </div>
    )
 }

  return (
    <div className='grid grid-cols-3 gap-4 p-9'>
     {
        rooms.map((room,index)=>(
            <Room  room={room} key={index}/>
        ))
     }
    </div>
  )
}

export default RoomsList
