import React, { Children, createContext, useContext,useEffect,useState } from 'react'
import data from "./data"
const RoomContext = createContext();

const Context = ({children}) => {
   const [state,setState] = useState({
    rooms:[],featuredRooms:[],sortedRooms:[],loading:true,type:"all",
    capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:false,pets:false
   })

   

   function formattedData(data){
        let tempdata = data.map((temp)=>{
            let id= temp.sys.id;
            let images = temp.fields.images.map(image=>image.fields.file.url)
            let room={...temp.fields,id,images}
            return room
        })
        return tempdata
   }

   function getRoom(slug){
        let tempdata = [...state.rooms]
        const room = tempdata.find(room=>room.slug===slug)
        console.log(room)

        return room
   }

   function handleChange(event){
      const target = event.target
      const value = target.type==="checkbox"? target.checked : target.value
      const name = target.name

      setState((prevValue)=>{
        return {...prevValue,[name]:value}
      
      })
      filterRooms()
   }


   function filterRooms(){
    let {handleChange,type,capacity,price,minPrice,
      maxPrice,minSize,maxSize,breakfast,pets} = state
      let tempRooms = [...rooms];

      price = parseInt(price)
      capacity = parseInt(capacity)

      if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }
    
      if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }
      
      tempRooms = tempRooms.filter(room => room.price <= price);
     
      tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
      );
      
      if (breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
      }
      
      if (pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
      }

      setState({sortedRooms: tempRooms})

   }
   
   function componentToMount(){
        let rooms = formattedData(data)
        let featuredRooms = rooms.filter((room)=>room.featured===true)
        let sortedRooms = rooms
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))
        useEffect(()=>{ setState(
          {rooms,featuredRooms,sortedRooms,loading:true,type:"all",
          maxPrice,maxSize
           })},[])
       

   }

   componentToMount()
  return (
    

    <div>
      <RoomContext.Provider value={{state:{...state},getRoom:getRoom,handleChange:handleChange}}>
        {children}
      </RoomContext.Provider>
    </div>
  )
}

export default Context

export const RoomsData = ()=>useContext(RoomContext)