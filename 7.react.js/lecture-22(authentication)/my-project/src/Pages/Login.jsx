import React from 'react'
import { useState  } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     const [user , setuser]= useState('')
     const auth = useAuth()
     const naviget = useNavigate()

      const handellogin = ()=>{
        auth.login(user)
        naviget('/profile')
      }
  return (
    <div>
        <label htmlFor='username'>user name</label>
      <input type='text' onChange={(e) => setuser(e.target.value)}/>
      <button onClick={handellogin}>Login</button>
    </div>
  )
}

export default Login
