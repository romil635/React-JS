import './App.css'
import Navbar from './Componets/Nevbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Conteat'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFeatures from './Pages/ProductFeatures'
import NewProduct from './Pages/NewProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          <Route path='product' element={<Product />}>
            <Route path="productfeatures" element={<ProductFeatures/>}></Route>
            <Route path='newproduct' element={<NewProduct/>}></Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App