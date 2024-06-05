import React from 'react'
// import Navbar from '../Componets/Navbar'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate= useNavigate()

  return (
    <div>
      {/* <Navbar/> */}
      <h1 className='text-2xl font-bold text-center'> this is product page</h1>
      <button onClick={() => navigate('/Shop')}>Order place</button>
    </div>
  )
}

export default Product
