import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router'

const Profile = () => {
    const Auth =useAuth()
    const navigate =useNavigate
    const handleLogout = () => {
        Auth.logout()
        navigate('/')
    }
  return (
    <div>
    <span>Wel come to emart project </span>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile