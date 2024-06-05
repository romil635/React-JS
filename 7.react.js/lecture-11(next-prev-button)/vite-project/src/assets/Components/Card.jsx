import React from 'react'
import { Product } from '../../projusct'
import { useState } from 'react'

  const Card = () => {
    const [index, setIndex] = useState(0)
    const firstIndex = 0
    const lastIndex = Product.length - 1

    const Next = () => {
        if (index < lastIndex) {
            setIndex(index + 1)
        } else {
            setIndex(firstIndex)
        }
    }

    const Prev = () => {
        if (index > firstIndex) {
            setIndex(index - 1)
        } else {
            setIndex(lastIndex)
        }
    }
  
  let productData = Product[index]
  return (
    <div>
      <button onClick={Next} className='btn p-4 bg-black text-white'>Next</button>
      <button onClick={Prev} className='btn p-4 bg-black text-white'>Prev</button>
      <div className='flex justify-center'>
        <div className='w-[300px] border-2 border-solid border-black rounded-xl overflow-hidden p-4'>
          <div className='flex justify-center p-4'>
            <img className='h-[150px] w-[150px]' src={productData.image} alt="" />
          </div>
          <div className='bg-red-400 rounded-2xl p-4'>
            <h1 className='font-bold'>{productData.title}</h1>
            <p>{productData.description}</p>
            <span className='font-bold'>{productData.category}</span>
            <span className='font-bold'>{productData.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
