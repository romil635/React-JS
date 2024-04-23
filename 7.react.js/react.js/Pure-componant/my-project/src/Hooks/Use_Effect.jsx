import React from 'react'

/*React with useEffect Hooks */

/*
useEffect(setup , dependensis!)
*/

import { useState, useEffect } from 'react'

const Use_Effect = () => {

  const [data, setData] = useState(0)
  const [userData, setUsertData] = useState("Srushti")

  function handleClick() {
    setData(data + 1)
  }

  function handleClick2() {
    setUsertData(" ")
  }

  useEffect(() => {
    console.log("Hello")
  })

  return (
    <div>
      <span className='btn me-4'>{data}</span>
      <button className='btn me-7' onClick={handleClick}>Click me</button>
      <span className='btn me-4'>{userData}</span>
      <button className='btn' onClick={handleClick2}>Click me</button>
    </div>
  )
}

export default Use_Effect
