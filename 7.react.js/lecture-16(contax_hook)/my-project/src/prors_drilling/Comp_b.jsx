import React from 'react'
import Comp_c from './Comp_c'

const Comp_b = ({name}) => {
  return (
    <div>
      <h1>this is components B {name}</h1>
      <Comp_c name={name}/>
    </div>
  )
}

export default Comp_b
