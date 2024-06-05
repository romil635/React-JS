import React from 'react'
import { useState , useMemo } from 'react'

const Use_Meno = () => {

    const [add ,setAdd] = useState(0)
    const [count , setCount] = useState(0)

     function added(){
      console.log('added called')
      return setAdd(add+1)
     }

        function counter(){
          console.log('counter add')
          return setCount(count+10)
        }

         const multiplication = useMemo(function multi(){
          console.log('multi call');
          return add *10
         },[add])

         
  return (
    <div>
      <h1 className='text-4xl'>React hook useMemo</h1>
      <div className='btn'>multi: {multiplication}</div>
      <div className='btn'>add: {add}</div>
      <div className='btn'> count:{count}</div>
      <button  className='btn' onClick={added}>Click Add</button>

      <button  className='btn' onClick={counter}>Click Count</button>
    </div>
  )
}

export default Use_Meno
