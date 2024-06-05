import React, { useContext } from 'react'
import {data , data1} from'./Comp_main'

const Comp_3 = () => {

     const name = useContext(data)
     const surname = useContext(data1)
  return (
    <div>

        <h1> hello i am {name} my surname is {surname}</h1>
      </div>
  )
}

export default Comp_3
