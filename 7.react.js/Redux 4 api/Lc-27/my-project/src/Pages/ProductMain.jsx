import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeTocart } from '../ProductData/Redux/Action'
import { productData } from '../ProductData/ProductRedux/ProAction'



const ProductMain = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.ProductReducer)

  console.warn("product main called", data);


   useEffect(() =>{
    dispatch(productData())
   },[])

  return (
    <div>
      {/* <button className='btn' onClick={() => dispatch(addTocart(productd))} >Add to cart</button>
      <button  className='btn' onClick={() => dispatch(removeTocart(product))} >removeTocart</button>
      <button  className='btn' onClick={() => dispatch(emptycart())} >emptycart</button>
      <button  className='btn' onClick={() => dispatch(productData())} >ProductCart</button> */}

      <div className='flex flex-wrap'>
        {
          data.flat().map((item) => {
            return (
              <>
                <div key={item.id} className='w-72 border-solid border-black border-2'>
                  <div>
                    <img className='h-64' src={item.image} alt="" />
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                  </div>
                    <div className='flex h-24'>
                    <button onClick={() => dispatch(addTocart(item))} className='btn'>Addcart</button>
                    <button onClick={() => dispatch(removeTocart(item))} className='btn'>removecart</button>
                    </div>
                </div>
              </>
            )
          })
        }
      </div>

    </div>
  )
}

export default ProductMain
