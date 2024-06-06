
//Passing the next state directly

import React from 'react'
import { useState } from 'react';

const Task_2 = () => {

  const [age, setAge] = useState(42);

  function increment() {
    setAge(age => age + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button className="bg-red-300 w-20 text-white " onClick={() => {
        increment();
        increment();
        increment();
        increment();
      }}>+3</button>
      <button className="bg-red-300 w-20 text-white" onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}



export default Task_2