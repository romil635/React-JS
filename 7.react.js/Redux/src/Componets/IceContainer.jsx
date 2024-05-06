import React from 'react'
import { connect } from 'react-redux'
import { buy_icecreame } from '../Redux'

const IceContainer = (props) => {
  return (
    <div>
      <h1 className=' bg-blue-200 px-44 py-20  font-bold text-center text-8xl'> Number of Ice :       {props.numOFicecreame } </h1>
      <a><button  onClick={props.buy_icecreame} className='btn bg-slate-400 border-amber-100 py-3 px-10 mt-8 ml-24 bodar rounded-2xl ring-4 hover:bg-green-100'>Click</button></a>
      {/* <a><button  onClick={props.buy_icecreame} className='btn bg-slate-400 border-amber-100 py-3 px-10 mt-8 ml-24 bodar rounded-2xl ring-4 hover:bg-green-100'>Click</button></a> */}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    numOFicecreame: state.numOFicecreame
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buy_icecreame: () => dispatch(buy_icecreame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceContainer)







