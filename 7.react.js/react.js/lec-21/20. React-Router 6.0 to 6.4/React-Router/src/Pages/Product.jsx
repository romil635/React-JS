import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>This is Product Page</h1>
      <nav className='mt-6'>
        <Link className='me-5' to='productfeature'>Product Features</Link>
        <Link to='newproduct'>New Product</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Product
