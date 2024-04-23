import React, { useState } from 'react'
import { Product } from '../Product'

const Card = () => {
    const [index, setIndex] = useState(0)
    const firstIndex = 0
    const lastIndex = Product.length - 1

    const handleNext = () => {
        if (index < lastIndex) {
            setIndex(index + 1)
        } else {
            setIndex(firstIndex)
        }
    }

    const handlePrev = () => {
        if (index > firstIndex) {
            setIndex(index - 1)
        } else {
            setIndex(lastIndex)
        }
    }

    const ProductData = Product[index]

    return (
        <div className='select-none '>
            <button onClick={handlePrev} className='btn mx-2'>Prev</button>
            <button onClick={handleNext} className='btn mx-2'>Next</button>
            
            <p>Index: {index + 1} of {Product.length}</p>
            <div className='flex justify-center'>
                <div className='w-[300px] border-2 border-solid border-black rounded-xl overflow-hidden p-4  bg-yellow-400'>
                    <div className='flex justify-center p-4'>
                        <img className='h-auto w-auto ' src={ProductData.image} alt="" />
                    </div>
                    <div className='bg-orange-500 rounded-2xl p-4'>
                        <h1 className='font-bold'>{ProductData.name}</h1>
                        {/* <p>{ProductData.}</p> */}
                        <span>_{ProductData.description}</span>
                        <span className='font-bold ms-28 block'>${ProductData.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card