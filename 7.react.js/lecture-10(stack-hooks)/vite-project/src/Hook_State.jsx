import React from 'react'
import { useState } from 'react'


const Hook_State = () => {
  const [data , setData] = useState(0)

  function Increment() {
    setData(data + 1)
  }

  function decrement() {
    setData(data - 1)
  }
  return (
    <div>
     <div>{data}</div>
      <button className='bg-green-500 p-2 text-white'onClick={Increment}>+</button>
      <button className='bg-green-500 p-2 text-white' onClick={decrement}>-</button>
    </div>
  )
}

export default Hook_State
