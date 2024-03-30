import React from 'react'


const Title = ({title}) => {

  return (
    <div className=' text-center p-9 '>
      <h1 className='mb-2 text-5xl'>{title}</h1>
      <div className='h-1.5 w-[200px] mx-auto bg-[#3f4389]'></div>
    </div>
  )
}

export default Title
