import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
     const auth = useAuth ()

     const navigat = useNavigate()

      const handellogout= () =>{
        auth.logout()
        navigat('/')

      }
  return (
    <div>
      <span>wellcomen To Emart {auth.user}</span>
      <button onClick={handellogout}>logout</button>
    </div>
  )
}

export default Profile
