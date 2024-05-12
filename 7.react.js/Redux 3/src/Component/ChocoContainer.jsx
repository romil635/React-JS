import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import{buy_choco} from'../Redux'

const ChocoContaier = () => {

     const  numofchoco = useSelector(state => state.choco.numofchoco)

     const dispatch = useDispatch()
  return (
    <div>
       <h1 className=' bg-blue-200 px-20 py-10  font-bold text-center text-8xl'> num of Choco:{numofchoco}</h1>
       <button className='btn bg-slate-400 border-amber-100 py-3 px-10 mt-8 ml-24 bodar rounded-2xl ring-4 hover:bg-green-100' onClick={() => dispatch (buy_choco())}>Click</button>
    </div>
  )
}

export default ChocoContaier
