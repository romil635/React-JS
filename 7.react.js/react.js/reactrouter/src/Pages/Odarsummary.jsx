import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate1 = useNavigate()

  return (
    <div>
        <Navbar/>
      <span>Order Confirmed!!!</span><br></br>
      <button onClick={() => navigate1(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary