import React from 'react'


 const Buttoun = () => {
  
    let box ="10"
  
    return (
        <>
        <button className='bg-red-500 px-12  py-2 border border-solid border-black bottom-2'>click me</button>
        {console.log(box)}
       
        </>
      )

}

 const Buttoun1 =() => {
  return (
      <>
      <button className='bg-yellow-500 px-12  py-2 border border-solid border-black bottom-2'>click me</button>
      </>
    )
  }
    
 const Buttoun2 =() => {
  return (
      <>
      <button className='bg-blue-500 px-12  py-2 border border-solid border-black bottom-2'>click me</button>
      </>
    )
  }
   const Buttoun3 =() => {
    return (
        <>
        <button className='bg-orange-500 px-12  py-2 border border-solid border-black bottom-2'>click me</button>
        </>
      )
    }
     const Buttoun4 =() => {
      return (
          <>
          <button className='bg-green-500 px-12  py-2 border border-solid border-black bottom-2'>click me</button>
          </>
        )
      }
const Nested = () => {
    return (
        <div>
        <Buttoun/>
        <Buttoun1/>
        <Buttoun2/>
        <Buttoun3/>
        <Buttoun4/>
        
        
    </div>
  )
}

export default Nested
