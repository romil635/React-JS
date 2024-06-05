import React from 'react'
import Comp_1 from'./Comp_1'
import { createContext } from 'react'



 const data =  createContext()
 const data1 =  createContext()


const Comp_main = () => {

   const name = "jasmi"
   const  surname ="mulani"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={surname}>
      <h1>this is components main</h1>
      <Comp_1/>
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Comp_main
export{data ,data1}
