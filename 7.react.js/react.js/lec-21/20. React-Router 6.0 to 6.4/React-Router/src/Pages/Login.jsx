import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router'



const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user)
        navigate('/')
    }
    return (
        <div>
            <label htmlFor="userName">UserName</label>
            <input type="text" placeholder='username' onChange={(e) => { setUser(e.target.value) }} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login