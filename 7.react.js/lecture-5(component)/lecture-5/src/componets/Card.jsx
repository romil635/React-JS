// import React from 'react'
// import Button from'./Nested'



// const Card = () => {
//   return (
//     <div>
//       <Button/>
//     </div>
//   )
// }

// export default Card

import React from 'react'
import  {Button1 , Button2}  from './Nested'
// import  Button1  from './Nested'

let btn = 'click me'
const Card = () => {
  return (
    <div>
      {/* <Button1/>
      <Button2/>   */}
      <button  className='bg-orange-400 px-12 py-2 border-solid border-black border-2'>{btn}</button>
    </div>
  )
}

export default Card

