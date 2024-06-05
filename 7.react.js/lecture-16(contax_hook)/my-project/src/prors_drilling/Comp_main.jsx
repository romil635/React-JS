import React from 'react'
import Comp_a from './Comp_a'

const Comp_main = () => {

     const name = "skillqode"

  return (
    <div>
      <h1> this is components Main</h1>
      <Comp_a name={name}/>
    </div>
  )
}

export default Comp_main
