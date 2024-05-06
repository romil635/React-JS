import React from 'react'
import { useState } from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user , setUser] = useState('')
    const auth =UseAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user)
        navigate('/profile')
    }
  return (
    <div className='pt-5 '>
        <label htmlFor="userName">UserName</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} className='bo' /><br/><br/>
        <button onClick={handleLogin} className='h-10 w-32 bg-black rounded-2xl text-white'>Login</button>
    </div>
  )
}

export default Login
