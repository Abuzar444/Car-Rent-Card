import React, { useState } from 'react'
import PickUpLocation from './PickUpLocation';
import {TiTick} from 'react-icons/ti'
import data from './data';

const CarRentForm = () => {
  const [date, setDate] = useState()
  return (
    <div className='w-[550px] bg-white rounded-lg shadow-lg p-12'>
        <div className=''>
            <h1 className='text-xl font-bold'>Search for a rental Car</h1>
        </div>
        <form action="" className='my-5'>
          <PickUpLocation />
          {/* <Test /> */}
            <label htmlFor="" className='flex items-center'>
            <input type="checkbox" className='w-6 h-6 mr-3 mt-3' name="checkbox" id="checkbox" />Deliver The Car Somewhere else
            </label>
        </form>
        <div className='flex'>
          <label htmlFor="">
            Date of pickup
            <input className='border border-2px-#333 w-[220px] py-2 px-2 rounded-sm' type="date" onChange={(e)=> setDate(e.target.date)} />
            </label>
            <label htmlFor="" className='ml-3'>
              Date of delivery
            <input className='border border-2px-#333 w-[220px] px-2 py-2 rounded-sm' type="date" onChange={(e)=> setDate(e.target.date)} /> 
            </label>
        </div>
        <div className='my-5'>
          <label htmlFor="" className='flex items-center'>
            <input type="checkbox" className='w-6 h-6 mr-3' name="" id="" />
            The deriver's age between 30 and 65
            </label>
        </div>
        <div>
          {data.map((item) => {
            return (
              <p className='flex items-center'><TiTick className='text-[#243264] w-6 h-6' />{item.pText}</p>
            )
          })}
        </div>
        <div className='mt-10'>
          <button className='w-full bg-[#FE6F4F] text-white py-4 rounded-xl'>Search</button>
        </div>
    </div>
  )
}

export default CarRentForm