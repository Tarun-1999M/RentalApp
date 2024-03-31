import React from 'react'
import { RoomsData } from '../Context'

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({rooms}) => {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets } = RoomsData().state;

    const {handleChange} = RoomsData()

    let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  return (
    <div>

      <form>
        <div className='p-9 flex justify-evenly text-xl'>
         <div className='flex flex-col w-[150px]'>
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            onChange={handleChange}
            value={type}
          >
            {types}
          </select>
        </div>

        <div className='flex flex-col w-[150px]'>
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            onChange={handleChange}
            value={capacity}
          >
            {people}
          </select>
        </div>

        <div className='flex flex-col w-[200px]'>
          <label htmlFor="price">Room price: ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice} 
            value={price}
            onChange={handleChange}
          />
          </div>

          <div >
          <label htmlFor="size">Room size </label>
          <div className='flex gap-2'>
          <div className='flex-1 border-2 border-black'>
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />
          </div>
          <div className='flex-1 border-2 border-black'>
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
          </div>
          </div>

          <div>
          <div>
            <input
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Pets</label>
          </div>
        </div>

        </div>
        </form>


    </div>
  )
}

export default RoomsFilter
