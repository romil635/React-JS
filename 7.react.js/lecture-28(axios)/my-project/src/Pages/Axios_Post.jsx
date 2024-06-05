import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios_Post = () => {

     const data = {fname : '' , lname : ''}

     const [inputData ,setinputData] = useState(data)

     const handlechange = (e) =>{
        setinputData({...inputData , [e.target.name]: e.target.value})
        console.log(setinputData);
     }

     const handlesubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/Product' ,inputData)
        .then((res) =>{
            console.log(res);
        })
     }

     const handleUpdate = (e) =>{
        e.preventDefault()
      axios.put('https://jsonplaceholder.typicode.com/todos/1',inputData)
        .then((res) =>{
            console.log(res);
        })
     }

     const handleDelete = (e) =>{
        e.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/todos/1' ,inputData)
        .then((res) =>{
            console.log(res);
        })
     }

     
  return (
    <div>
      <h1> Axios post reqest</h1>
      <label>First Name</label>
      <input className='border-2 border-solid flex' type="text" name='fname'  value={inputData.fname} onChange={handlechange}/>


      <label>Last Name</label>
      <input className='border-2 border-solid flex' type="text" name='lname' value={inputData.lname} onChange={handlechange} />

       <button className='btn' onClick={handlesubmit}>Submit</button>
       <button className='btn' onClick={handleUpdate}>Update</button>
       <button className='btn' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Axios_Post
