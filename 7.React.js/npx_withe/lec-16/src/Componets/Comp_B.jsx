import React from 'react'
import Comp_C from '../Componets/Comp_c'

const Comp_B = () => {
  return (
    <div>
      <h1> This is components B</h1>
      <Comp_C name={name}/>
    </div>
  )
}

export default Comp_B