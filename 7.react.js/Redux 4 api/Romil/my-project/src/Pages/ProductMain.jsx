import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart, emptyCart } from '../ProductData/Redux/Action'
import { ProductData } from '../ProductData/ProductRedux/ProductAction'

const ProductMain = () => {

  const data = useSelector((state) => state.ProductReducer3)

  console.warn('ProductMain', data);

  const dispatch = useDispatch()

  return (
    <div>
      {/* <button className='btn' onClick={() => dispatch(addToCart(product))}>AddToCart</button>
        <button className='btn' onClick={() => dispatch(removeToCart(product))}>RemoveToCart</button> */}
      <button className='btn' onClick={() => dispatch(emptyCart())}>EmptyToCart</button>
      <button className='btn' onClick={() => dispatch(ProductData())}>ProductCart</button>

      <div className=''>
        {
          data.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div>
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                    <button className='btn' onClick={() => dispatch(addToCart(product))}>AddToCart</button>
                    <button className='btn' onClick={() => dispatch(removeToCart(product))}>RemoveToCart</button>
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