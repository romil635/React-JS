import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import{buy_choco} from'../Redux'


const ChocoContaier = () => {

     const  numofchoco = useSelector(state => state.choco.numofchoco)

     const dispatch = useDispatch()
  return (
    <div>
       <h1> num of choco:{numofchoco}</h1>
       <button className='btn' onClick={() => dispatch (buy_choco())}>click</button>
    </div>
  )
}

export default ChocoContaier
