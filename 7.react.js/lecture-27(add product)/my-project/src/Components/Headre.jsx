import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";




const Headre = () => { 

  const reult = useSelector((state) => state.Reducer)

  console.warn("header called", reult);
  return (

    <div className='h-24  bg-cyan-500 flex justify-between items-center px-20'>
      <NavLink to="/"> Shop </NavLink>
      <NavLink to="Cart">
        <div className='flex'>
          <IoCartOutline className='text-2xl' />
          <span>{reult.length}</span>
        </div>
      </NavLink>
    </div>
  )
}

export default Headre
