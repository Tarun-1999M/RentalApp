import React from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import { RoomsData } from '../Context'

const RoomsContainer = () => {

    const {rooms,featuredRooms,sortedRooms,loading} = RoomsData().state

  return (
    <div>
      <h1>Hello from Rooms Container</h1>
      <RoomsList rooms={sortedRooms}/>
      <RoomsFilter />
    </div>
  )
}

export default RoomsContainer
