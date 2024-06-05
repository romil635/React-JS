import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../Pages/Auth'


const Navbar = () => {

   const navstyle = ({isactive}) =>{
    return{
    color: isactive ? "black" :"orange" 
    }
   }


    const auth = useAuth()
  return (

    <div>
      <header className='flex bg-gary-400 items-center justify-between'>
        <div className=''>
          <a href=''>
          <Link to="/">
            <div className='text-4xl font-bold'> L o g o</div>
            </Link>
          </a>
        </div>
        <nav className='nav-li'>
          <ul className='flex '>
            <li className='px-2'><NavLink style={navstyle}  to='/'>Home</NavLink></li>
            <li className='px-2'> <NavLink style={navstyle}  to='/product'>Product</NavLink></li>
            <li className='px-2'><NavLink style={navstyle}  to='/page'>Pages</NavLink></li>
            <li className='px-2'><NavLink style={navstyle}  to='/about'>About</NavLink></li>
            <li className='px-2'><NavLink  style={navstyle} to='/contact'>Contact</NavLink></li>
            <li className='px-2'><NavLink  style={navstyle} to='/Product2'>Product2</NavLink></li>
            {/* <li className='px-2'><NavLink  style={navstyle} to='/User'>user</NavLink></li> */}
            <li className='px-2'><NavLink  style={navstyle} to='/Profile'>Profile</NavLink></li>
            {
              !auth.user ? (<li><NavLink style={navstyle} to='/login'>Login</NavLink></li>) : (<li><NavLink style={navstyle} to='/Profile'>{auth.user}</NavLink></li>)
            }
          </ul>
        </nav>
      </header>
      {/* <h1 className='text-2xl font-bold text-center'> this is NAV page</h1> */}
    </div>


  )
}

export default Navbar