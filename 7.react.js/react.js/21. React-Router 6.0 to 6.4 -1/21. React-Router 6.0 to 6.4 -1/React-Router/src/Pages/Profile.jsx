import React from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
const Profile = () => {

    const auth = UseAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <div className='me-4'>
        <span>Welcome    To    Emart Mr/Mrs {auth.user}</span> <br /><br/>
        <button className='btn font-medium' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
