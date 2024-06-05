import React from 'react'
import Headre from './Components/Headre'
import {BrowserRouter,Routes ,Route} from'react-router-dom'
import ProductMain  from'./Pages/ProductMain'
import Cart from './Pages/Cart'

function App() {

 
  return (
    <>
    <BrowserRouter>
      <Headre/>
   <Routes>
      <Route path='/' element={<ProductMain/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
   </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
