import React from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import { RoomsData } from '../Context'

const RoomsContainer = () => {

    const {rooms,featuredRooms,sortedRooms,loading} = RoomsData().state

  return (
    <div>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </div>
  )
}

export default RoomsContainer
