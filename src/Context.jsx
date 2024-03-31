import React, { Children, createContext, useContext,useEffect,useState } from 'react'
import data from "./data"
const RoomContext = createContext();

const Context = ({children}) => {
   const [state,setState] = useState({
    rooms:[],featuredRooms:[],sortedRooms:[],loading:true,type:"all",
    capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:false,pets:false
   })

   useEffect(() => {
    const formattedData = data.map(item => {
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id: item.sys.id };
      return room;
    });

    let featuredRooms = formattedData.filter(room => room.featured === true);
    let maxPrice = Math.max(...formattedData.map(item => item.price));
    let maxSize = Math.max(...formattedData.map(item => item.size));

    setState({
      ...state,
      rooms: formattedData,
      featuredRooms,
      sortedRooms: formattedData,
      loading: false,
      maxPrice,
      maxSize,
    });
  }, []);


   function getRoom(slug){
        let tempdata = [...state.rooms]
        const room = tempdata.find(room=>room.slug===slug)
        return room
   }
  return (
    
    <div>
      <RoomContext.Provider value={{state:{...state},getRoom:getRoom}}>
        {children}
      </RoomContext.Provider>
    </div>
  )
}

export default Context

export const RoomsData = ()=>useContext(RoomContext)