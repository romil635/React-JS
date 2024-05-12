import './App.css'
import Header from './Components/Header'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ProductMain from './Pages/ProductMain'
import Cart from './Pages/Cart'

function App() {



  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element = {<ProductMain/>} />
          <Route path='/cart' element = {<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App