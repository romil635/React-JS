import React from 'react'
import { useState , createContext , useContext } from 'react'

 const AuthContext = createContext(null)

export const AuthProvider = ({Children}) => {

    const [user , setUser] = useState(null)

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
export const useAuth = () => {
    return useContext(AuthContext)
}
