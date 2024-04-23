import React from 'react'
import { useState , useMemo } from 'react'

/* Use Hooks useMemo() */
const UseMemo = () => {
    const [add , setAdd] = useState(0)
    const[count , setcount] = useState(0)

    function added(){
        console.log('added called');
        return setAdd(add + 1)
    }
    // function Counter(){
    //     console.log('counter called');
    //     return setAdd(add + 10)
    // }

    const Multiplication =useMemo(
        function multi(){
            console.log("Multi called")
            return add*10
        },[add]
    )
   

  return (
    <div>
        <h1 className='text-4xl'>React Hook UseMemo</h1>
        <div className='btn'>Multi :-{Multiplication}</div>
        <div className='btn'>Add :-{add}</div>
        <div className='btn'>Count :-{count}</div>
      <button className="btn" onClick={added}>Cilcck Add</button>
      <button className="btn" onClick={() => setcount (count+10)}>Click Count</button>
    </div>
  )
}

export default UseMemo