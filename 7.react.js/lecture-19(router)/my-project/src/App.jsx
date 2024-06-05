import './App.css'
import Home from './Pages/Home'
import About from'./Pages/About'
import Contact from'./Pages/Contact'
import Pages from'./Pages/Pages'
import Product from './Pages/Product'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Navbar from './Componets/Navbar'



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/page" element={<Pages/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter> 

    </>
  )
}

export default App
