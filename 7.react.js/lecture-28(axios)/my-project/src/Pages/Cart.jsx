import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

   const  CartData = useSelector(state => state.Reducer)

   const amount = CartData.length && CartData.map((item) => item.price).reduce((prev ,next)=>
  prev + next )
  return (
      <>
     <h1 className="flex justify-center text-3xl font-bold">Shipping Cart</h1>
     <div className='flex container mx-auto  justify-around'>
     <table className=" max-w-[800px] text-center mt-[20px]">
      <thead>

     <tr className="">
       <th className="border-2 border-black">Item Image</th>
       <th className="border-2 border-black">Item Name</th>
       <th className="border-2 border-black">item Price</th>
     </tr>
      </thead>
       {
         CartData.map((item) => {
           return(
             
             <tbody key={item.id}>
               <tr>
                 <td className="border-2 border-black "><img className="h-24 mx-auto" src={item.image} alt="" /></td>
                 <td className="border-2 border-black">{item.title}</td>
                 <td className="border-2 border-black">{item.price}</td>
               </tr>
             </tbody>
            
           )
         })
       }
     </table>
     <div>
         <table className=' mt-20 border-2 border-solid border-black'>
          <thead>
          <tr className='border-2  border-black'>
            <th>Table Price</th>
          </tr>
          </thead>
          <tbody>
          <tr className='border-2  border-black'>
            <td>{amount}</td>
          </tr>
          </tbody>
         </table>
     </div>
     </div>
   </>
)}



export default Cart
