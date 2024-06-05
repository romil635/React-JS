import React, { useState } from 'react'
import {FaSearch} from 'react-icona/fa'

const Search = ({Serch_result}) => {
  const [input, setinput] = useState("")

  const handleChange =(value) =>{
    setinput(value)
    console.log(value);
  }
  return (

    <div className='bg-gray-500 w-full rounded-lg h-[12] p-4 shadow-lg flex items-center'>
      <FaSearch className='teat-black cursor-pointer'/>
      <input type="text" placeholder='search' className='bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-300 text-white w-full' onChange={(e)=> handleChange(e.target.value)}/>
    </div>
  )
}

export default Search
