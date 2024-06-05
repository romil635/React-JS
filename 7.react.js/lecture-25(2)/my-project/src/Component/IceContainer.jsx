import React from 'react'
import { buy_ice } from '../Redux/Icecream/IceAction'
import { connect } from 'react-redux'
import { add_ice } from '../Redux/Icecream/IceAction'

const IceContainer =(props) => {
  return (
    <div>
       <h1> number of ice:{props.numofice}</h1>
       <button className='btn' onClick={props.buy_ice}>+</button>
       <button className='btn' onClick={props.add_ice}>-</button>
    </div>
  )
}

 const mapstateToprops = state =>{
  return{
    numofice: state.numofice
  }
 }

  const mapdispatchToPrpos = dispatch =>{
    return{
      buy_ice:() => dispatch(buy_ice()),
      add_ice:() => dispatch(add_ice())
    }
  }
export default  connect(mapstateToprops , mapdispatchToPrpos) (IceContainer)
