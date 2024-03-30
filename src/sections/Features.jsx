import React from 'react'
import { RoomsData } from '../Context'
const Features = () => {
    const {status,result} = RoomsData()
  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

export default Features
