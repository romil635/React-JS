import React from 'react'
import './App.css'
import { addToCart,removeToCart,emptyCart } from './ProductDeta/Action'
import { useDispatch } from 'react-redux'
import { ProductData } from './ProductDeta/ProductAction'
 function App(){
const Dispatch = useDispatch() 
const product = {
name:'iphonm',
color:'Matteble',
price:60000,
chip:'m2'

}
  return (
    <div>
<button onClick={addToCart(product)}>Add To Card</button>
    </div>
  )
}
 

export default App