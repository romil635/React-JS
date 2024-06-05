import React from 'react'
import { useState } from 'react'

const initialState = 10
const Use_State = () => {

    const[Age , setAge] = useState(initialState)

    function incrementAge(){
        setAge( Age => Age + 4)
        // setAge( Age => Age + 1)
    }
  return (
    <div>
      <div className="btn w-52 mt-2">{Age}</div>
      <button className='btn mt-2' onClick={incrementAge}>add age</button>
    </div>
  )
}
export default Use_State




 






// -------------------------task-5---------------------------


// ====================== home task ===========

 
// export default serchbar = () =>{
//     return(
//         <div className='app'>
//             <h1>search</h1>

//             <div className="search-container">
//                 <div className="serch-innner"></div>
//             </div>
//         </div>
//     )
// }



