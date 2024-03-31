import React from 'react';
import { NavLink } from 'react-router-dom';

const Room = ({ room }) => {
    const { name, slug, images, price } = room;
    
    return (
        <div className='w-[400px] shadow-2xl relative overflow-hidden'>
            <img src={images[0]} alt="single room" className="transition-opacity duration-300 ease-in-out hover:opacity-50"/>
            <div className='absolute top-0 left-0 z-10 text-white bg-black pr-4 pb-4 bg-opacity-50'>
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-[#3f4389]/50'>
                <NavLink 
                    to={`/rooms/${slug}`} 
                    className="text-white p-2 rounded-sm text-2xl border border-white">
                    Features
                </NavLink>
            </div>
            <div className='bg-[#3f4389] text-white text-xl p-2'>
                {name}
            </div>
        </div>
    );
}

export default Room;
