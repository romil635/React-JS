import React from 'react'
import Navbar from '../Componets/Navbar'
import { AuthProvider } from './Auth'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <AuthProvider>
      <Navbar/>
      <Outlet/>
        </AuthProvider>

    </div>
  )
}

export default Layout
