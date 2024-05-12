import React from 'react'
import { buy_cake } from '../Redux'
import { useSelector,useDispatch } from 'react-redux'

const CakeContainer = () => {

    const numofcake =useSelector(state => state.cake.numofcake)


    const dispatch = useDispatch()
  return (
    <div>
      <h1 className=' bg-blue-200 px-44 py-10  font-bold text-center text-8xl'> num of cake : {numofcake}</h1>
      <button className='btn bg-slate-400 border-amber-100 py-3 px-10 mt-8 ml-24 bodar rounded-2xl ring-4 hover:bg-green-100' onClick={() => dispatch (buy_cake())}>click</button>
    </div>
  )
}

export default CakeContainer
