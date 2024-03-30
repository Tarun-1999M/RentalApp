import React from 'react'
import { useParams } from 'react-router-dom'

const SingleRooms = () => {
  const {slug} = useParams()
  return (
    <div>
      hello from single rooms
      <h1>{`You have selected ${slug} room`}</h1>
    </div>
  )
}

export default SingleRooms
