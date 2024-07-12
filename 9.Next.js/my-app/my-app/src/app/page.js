'use client'
 
import { useState } from 'react'
 
export default function Counter() {
const state = 0;
const reset = () => {
  setCount(0)
}

  const [count, setCount] = useState(state)
 
  return (
    <div>
      <p className='items-center justify-center flex'>Counter value is   {count}</p>
      <div  className='items-center justify-center flex '>

      <button className='m-2 bg-slate-400 h-10 w-24 rounded-lg hover:ring-1' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='m-2 bg-slate-400 h-10 w-24 rounded-lg hover:ring-1' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='m-2 bg-slate-400 h-10 w-24 rounded-lg hover:ring-1' onClick={() => setCount(reset)} >Reset</button>
      </div>
    </div>
  )
}