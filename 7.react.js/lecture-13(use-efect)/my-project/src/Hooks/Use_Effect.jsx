import React from 'react'

import { useState,useEffect } from 'react'

const Use_Effect = () => {

    const[data , setData] = useState(0)
    const[userData , setUsrData] = useState("Skillqode")
     
       function click(){
          setData(data + 1)
       }

       function click2(){
        setUsrData("")
     }

         useEffect(() => {
           console.log("hello" );
           
         })
  return (
    <div>
        <span className='btn me-4'>{data}</span>
      <button className='btn me-4' onClick={click}>click me</button>
      <span className='btn me-4'>{userData}</span>
      <button className='btn' onClick={click2}>click me</button>
    </div>
  )
}

export default Use_Effect
