
import React from 'react'
// import Navbar from '../Componets/Navbar'
import { useNavigate } from 'react-router-dom'

const Shop = () => {

    const navigate1 = useNavigate()
  return (
    <div>
      {/* <Navbar/> */}
      <span> order confiermed!</span><br></br>
      {/* <button onClick={() => navigate('/')}>Go Back</button> */}
      <button onClick={() => navigate1(-1)}>Go Back</button>
    </div>
  )
}

export default Shop
