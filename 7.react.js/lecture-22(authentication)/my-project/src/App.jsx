import './App.css'
import Navbar from './Componets/Navbar'
import Home from './Pages/Home'
// import About from'./Pages/About'
import Contact from './Pages/Contact'
import Pages from './Pages/Pages'
import Product from './Pages/Product'
import Error404 from './Pages/Error404'
import Shop from './Pages/Shop'
import Product2 from './Pages/Product2'
import Productfeatures from './Pages/Productfeatures'
import Nweproduct from './Pages/Nweproduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './Pages/User'
import UserDetails from './Pages/UserDetails'
import Admin from './Pages/Admin'
import Profile from './Pages/Profile'
import { AuthProvider } from './Pages/Auth'
import Login from './Pages/Login'
import ReqierAuth from './Pages/ReqierAuth'


// const AboutLazy = React.lazy(() => import("./Pages/About"))

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="page" element={<Pages />} />
            {/* <Route path="about" element={
        <React.Suspense fallback="loading.........">
          <About/>
          </React.Suspense>
        }/> */}
            <Route path="contact" element={<Contact />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/Profile" element={
              <ReqierAuth>
                <Profile />
              </ReqierAuth>
            }>
            </Route>
            <Route path="Product2" element={<Product2 />}>
              <Route path='Productfeatures' element={<Productfeatures />}></Route>
              <Route path='Newproduct' element={<Nweproduct />}></Route>
            </Route>
            <Route path="user" element={<User />}>
              <Route path=":userId" element={<UserDetails />} />
              <Route path="Admin" element={<Admin />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
