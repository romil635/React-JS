import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate2 = useNavigate()
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">This is Home Page</h1>
        <button onClick={() => navigate2(0)} className='btn font-normal'>Go To Tour</button>
      </div>
    </>
  )
}

export default Home
