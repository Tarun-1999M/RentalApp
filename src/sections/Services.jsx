import React from 'react'
import Title from '../components/Title'
import state from "../components/servicesInfo"

const Services = () => {
  return (
    <div className='text-center p-9'>
      <Title title="Services"/>
      <div className='grid grid-cols-4 gap-2'>
    {  
        state.services.map((service,index)=>(
            <div key={index} className='flex  flex-col gap-4 my-[15px]'>
                <div className='mx-auto'>{React.createElement(service.icon, { className: "icon-class" ,size:"3rem"})}</div>
                <div className='text-2xl'>{service.title}</div>
                <div className='text-xl text-[#696464]'>{service.info}</div>
            </div>
        ))
        
    }
     </div>
    </div>
  )
}

export default Services
