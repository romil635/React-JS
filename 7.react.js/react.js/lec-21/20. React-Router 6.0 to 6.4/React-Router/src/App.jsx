import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFeatures from './Pages/ProductFeatures'
import NewProduct from './Pages/NewProduct'
import User from './Pages/User'
import Admin from './Pages/Admin'
import UserDetail from './Pages/UserDetail'
import Profile from './Pages/Profile'
import { AuthProvider } from './Pages/Auth'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    |<AuthProvider>
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

          <Route path="user" element={<User/>}>
            <Route path="admin" element={<Admin/>}></Route>
            <Route path=":userId" element={<UserDetail/>}></Route>
          </Route>
          <Route path="profile" element={<Profile/>}></Route>

          <Route path="Login" element={<Login/>}></Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

    </>
  )
}

export default App

// Relative URL
// index
// use params
// use search params
// React.lazy