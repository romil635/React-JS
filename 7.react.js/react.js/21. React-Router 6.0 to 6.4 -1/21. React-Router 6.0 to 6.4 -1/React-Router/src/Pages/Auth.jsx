import React from 'react'
import { useState , createContext , useContext } from 'react'

 const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [user , setUser] = useState()

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

  return (
    <>
        <div>
            <AuthContext.Provider value={{user, login , logout}}>
                {children}
            </AuthContext.Provider>
        </div>
    </>
  )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}