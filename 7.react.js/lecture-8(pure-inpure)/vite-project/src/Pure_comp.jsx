import React from 'react'

let number = 0
export const Double = () => {

    number = number + 1

    return(
      <ol>
        <li> This is number {number}</li>
      </ol>
    )
        
}

const Pure_comp = () => {
  return (
    <div>
      <h1>Math Number</h1>
      <Double/>
      <Double/>
      <Double/>
    </div>
  )
}

export default Pure_comp
