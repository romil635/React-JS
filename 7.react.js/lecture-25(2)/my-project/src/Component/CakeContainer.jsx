import React from 'react'
import { buy_cake } from '../Redux'
import { connect } from 'react-redux'
import { add_cake } from '../Redux'


const CakeContainer = (props) => {
  return (
    <div>
      <h1>NumberOfCakes: {props.numOfCake}</h1>
      <button className='btn' onClick={props.buy_cake}>-</button>
      <button className='btn' onClick={props.add_cake}>+</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCake: state.numOfCake
  }
}

const mapdispatchToPrpos = dispatch => {
  return{
    buy_cake:() =>dispatch(buy_cake()),
    add_cake:() =>dispatch(add_cake())
  }
}
export default connect(mapStateToProps , mapdispatchToPrpos) (CakeContainer)
