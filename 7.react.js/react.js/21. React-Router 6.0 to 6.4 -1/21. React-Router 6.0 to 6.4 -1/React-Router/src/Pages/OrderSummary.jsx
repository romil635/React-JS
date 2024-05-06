import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate1 = useNavigate()
  return (
    <div>
      <span>Order Comfirmed !</span> <br />
      <button onClick={() => navigate1(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary
