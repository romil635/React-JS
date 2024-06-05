import './App.css'
import Navbar from './Componets/Navbar'
import Home from './Pages/Home'
import About from'./Pages/About'
import Contact from'./Pages/Contact'
import Pages from'./Pages/Pages'
import Product from './Pages/Product'
import Error404 from './Pages/Error404'
import Shop from './Pages/Shop'
import Product2 from './Pages/Product2'
import Productfeatures from './Pages/Productfeatures'
import Nweproduct from './Pages/Nweproduct'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'


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
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Product2" element={<Product2/>}>
        <Route path='Productfeatures' element={<Productfeatures/>}></Route>
        <Route path='Newproduct'element={<Nweproduct/>}></Route>
      </Route>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter> 

    </>
  )
}

export default App
