import React from 'react'
import { useState , useMemo } from 'react'


/* React Hooks useMemo() */

const Use_Memo = () => {

    const [add , setAdd] = useState(0)
    const [count , setCount] = useState(0)

    function added(){
        console.log('added called')
        return setAdd(add + 1)
    }

    function counter(){
        console.log('counter called')
        return setCount(count + 10)
    }

    const Multiplication  = useMemo(function multi(){
        console.log('multi called');
        return add * 10
    } , [add])





  return (
    <div className='bg-gray-300 border border-black ring-amber-600 h-96'>
        <h1 className='text-4xl text-amber-600 font-bold'> * React Hook UseMemo *</h1>
        <div className='btn'>Multi : -{Multiplication}</div>
        <div className='btn'>Add :- {add}</div>
        <div className='btn'>count :-{count}</div>
        <button className='btn' onClick={added}>Click Add</button>
        <button className='btn' onClick={counter}>Click Count</button>
    </div>
  )
}

export default Use_Memo;