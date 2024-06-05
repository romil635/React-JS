//Passing the updater function

import React from 'react'
import { useState } from 'react';

const Task_1 = () => 
{
      const [age, setAge] = useState(42);
    
      function increment() {
        setAge(a => a + 1);
      }
  return (
    <>
    <div>
      <h1 className='mt-5'>Your age: {age}</h1>
      <button className="bg-red-300 w-20 text-white " onClick={() => {
         increment();
         increment();
         increment();
      }}>+3</button>
      <button className="bg-red-300 w-20 text-white m-2" onClick={() => {
        increment();
      }}>+1</button>
    </div>
    </>

  )
}


export default Task_1