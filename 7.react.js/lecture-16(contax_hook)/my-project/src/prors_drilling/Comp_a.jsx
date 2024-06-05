import React from 'react'
import Comp_b from './Comp_b'

const Comp_a = ({name}) => {
  return (
    <div>
      <h1>this is components A {name} </h1>
      <Comp_b name={name}/>
    </div>
  )
}

export default Comp_a
