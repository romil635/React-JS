import React from 'react'
import { useNavigate } from 'react-router-dom'
const Shop = () => {

  const navigate = useNavigate()


  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">This is Shop Page</h1>
        <button onClick={() => navigate('/ordersummary')}>Order Place</button>
      </div>
      <div  className='flex justify-center gap-8 mt-8'>
        <div>
          <h1>Let's Dwarka</h1>
          <img className='h-80 w-80' src="https://render.fineartamerica.com/images/rendered/default/wood-print/7/10/break/images-medium-5/dwarka-krishna-temple-kantilal-patel.jpg" alt="" />
          <p>4100.RS</p>
        </div>
        <div>
          <h1>Let's Kedarnath</h1>
          <img className='h-80 w-80' src="https://w0.peakpx.com/wallpaper/911/14/HD-wallpaper-kedarnath-mandir-night-view-view-lord-god-thumbnail.jpg" alt="" />
          <p>7100.RS</p>
        </div>
        <div>
          <h1>Let's Badrinath</h1>
          <img className='h-80 w-80' src="https://c8.alamy.com/comp/F6NE27/badrinath-temple-uttarakhand-india-asia-F6NE27.jpg" alt="" />
          <p>6501.RS</p>
        </div>
        <div>
          <h1>Let's Girnar</h1>
          <img className='h-80 w-80' src="https://i.pinimg.com/474x/5a/9f/8d/5a9f8daad1a52687c61d53ab63868ac9.jpg" alt="" />
          <p>5100.RS</p>
        </div>
      </div>
    </>
  )
}

export default Shop
