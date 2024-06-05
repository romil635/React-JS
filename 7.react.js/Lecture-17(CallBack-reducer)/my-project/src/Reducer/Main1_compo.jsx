import React from 'react'
import Comp1_A from './Comp1_A'
import { useReducer} from 'react'
import { createContext } from 'react'

const counter= createContext()


let initialState = 0

// const reducer = (state , action) => {
//   switch(action){
//     case 'ADD_TO_CART' : return state + 1
//     case 'REMOVE_TO_CART' : return state - 1
//     default : return state
//   }
// }

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_CART' :return state + 1
    case 'REMOVE_TO_CART' :
    if(state > 0 ){
      return state - 1
    }else{
      return state
    }
    case 'reset': return 0
    default : return state
  }
}
const Main1_compo = () => {
  const [data ,dispatch] =useReducer(reducer , initialState)
  return (
    <div>
       <counter.Provider value={data}>
        <Comp1_A/>
       </counter.Provider>
       {/* <button className='btn' onClick={() => dispatch('ADD_TO_CART')}>Add To Cart</button>
      <button className='btn' onClick={() => dispatch('REMOVE_TO_CART')}>Remove To Cart</button> */}

       <button className='btn' onClick={() =>dispatch({type:'ADD_TO_CART'})}>Add to Cart</button>
       <button className='btn' onClick={() => dispatch({type:'REMOVE_TO_CART'})}>Remove to cart</button>

    </div>
  )
}

export default Main1_compo
export {counter}
