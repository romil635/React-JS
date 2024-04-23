import React from 'react'
import Comp_A from './Comp_A'
const Comp_main = () => {
    const name = "harsh karkar"
  return (
    <div>
        <h1>this is Componant Main</h1>
        <Comp_A name={name}/>
    </div>
  )
}

export default Comp_main