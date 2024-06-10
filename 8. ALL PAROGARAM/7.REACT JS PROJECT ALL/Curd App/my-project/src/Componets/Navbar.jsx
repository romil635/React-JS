import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";



const Navbar = ({searchTerm, setsearchTerm}) => {
  return (
    <div>
      <header className='flex bg-gary-400 items-center  justify-around bg-gray-200 p-2 border-2 border-solid   border-gray-300'>
        <div className=''>
          <a href=''>
          <Link to="/">
            <div className='text-4xl font-bold'> L o g o</div>
            </Link>
          </a>
        </div>
        <nav className='nav-links'>
          <ul className='flex '>
            <li className='px-2'><Link to='/'>Home</Link></li>
            <li className='px-2'><Link to='/about'>About</Link></li>
            <li className='px-2'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <div className="flex w-full max-w-md items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              placeholder="search..."
              onChange={(e) => setsearchTerm(e.target.value)} value={searchTerm}/>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              <FaSearch />
            </button>
          </div>
      </header>
     
    </div>


  )
}

export default Navbar;