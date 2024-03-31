import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { RoomsData } from '../Context'
import FourZeroFour from './FourZeroFour'
import HeroMessage from '../components/HeroMessage'


const SingleRooms = () => {
  const {slug} = useParams()
  const {getRoom} = RoomsData()
  const room =  getRoom(slug)
  if(!room){
    return(<FourZeroFour />)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const { name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images} = room

    
  return (
    <div>
      <div className=' w-full h-[500px] bg-cover bg-center mx-auto flex justify-center items-center' style={{ backgroundImage: `url(${images[0]})` }}>
        <HeroMessage 
      message="Our Rooms"
      label="RETURN ROOMS"
      destination="/rooms"
        />
      </div>
      <div className='p-9'>
      <div className="grid grid-cols-3 gap-4">
   {images.map((image, index) => (
    <img key={index} src={image} alt={name} className="w-full object-cover"/> 
          ))}
  </div>

      <div className='flex text-xl gap-4 mt-[20px]'>
        <div className='w-[50%]'>
          <h3 className='text-bold text-4xl mb-[20px]'>Details</h3>
          <p>{description}</p>
        </div>

        <div>
        <h3 className='text-bold text-4xl  mb-[20px]'>Info</h3>
        <div className='flex flex-col gap-4'>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
          </div>
        </div>
      </div>
      <div className='text-xl mt-[20px]'>
      <h6 className='text-bold text-4xl  mb-[20px]'>Extras </h6>
          <ul className="extras grid grid-cols-4 gap-3">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
      </div>
      </div>
    </div>
  )
}

export default SingleRooms
