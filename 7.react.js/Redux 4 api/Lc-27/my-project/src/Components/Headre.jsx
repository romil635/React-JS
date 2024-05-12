import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";



const Headre = () => {

     const reult = useSelector((state) => state.Reducer)

     console.warn("header called" ,reult);
  return (
    <div className='h-24 bg-green-200 flex justify-between items-center px-20 '>
    
      <NavLink to="/"> Shop </NavLink>
      
      <NavLink to="Cart">
        <div>
        <FaShoppingCart className='falex' />
            <span className=''>{reult.length}</span> 
            </div>
      </NavLink>
    </div>
  
    
  )
}

export default Headre
