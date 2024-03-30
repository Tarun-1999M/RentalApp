import React, { Children, createContext, useContext } from 'react'

const RoomContext = createContext();

const Context = ({children}) => {
    const state={
        status:"how are you",
        result:"you can fucking do it, just focus on one thing at a time crack the interview and crack the project"
    }
  return (
    

    <div>
      <RoomContext.Provider value={{...state}}>
        {children}
      </RoomContext.Provider>
    </div>
  )
}

export default Context

export const RoomsData = ()=>useContext(RoomContext)
