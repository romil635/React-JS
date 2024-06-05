  import React from 'react'
  import { Link , Outlet } from 'react-router-dom'
  
  const Product2 = () => {
    return (
      <div>
         <h1 className='text-2xl font-bold text-center'> this is product page2</h1>
         <nav className='mt-6'>
          <Link className='me-5' to='Productfeatures'>Product Features</Link>
          <Link to='Newproduct'>New product</Link>
         </nav>
         <Outlet/>
      </div>
    )
  }
  
  export default Product2
  