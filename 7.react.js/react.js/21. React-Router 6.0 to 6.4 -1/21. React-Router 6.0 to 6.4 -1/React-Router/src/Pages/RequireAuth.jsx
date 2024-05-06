import React from 'react'
import { UseAuth } from './Auth'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {

    const auth = UseAuth()
    
    if(!auth.user){
        return <Navigate to="/login" />
    }
  return (
    children
  )
}

export default RequireAuth
