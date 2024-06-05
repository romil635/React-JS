import React, { useState } from 'react'
import { useRef} from 'react'
const Use_Ref = () => {
    
 const name = useRef(" ")
 const [show , setshow] =  useState(false);

 const submit = (e) => {
    e.preventDefault();
    const name1 = name.current.value;
    name1 === " " ? alert(" plz submit data") : setshow(true);
 }


  return (
    <div>
       <form action="" onSubmit={submit}>
        <div>
            <label htmlFor='name' >enter your name</label><br/>
            <input type="text" id='name'className='border-2 border-solid border-black' ref={name} />
        </div><br/>
        <button className='btn'> submit</button>
       </form>
       <p>
          { show ? `your name is ${name.current.value}` : " "}
       </p>
    </div>
  )
}

export default Use_Ref
 