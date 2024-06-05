import { useState, createContext, useContext } from "react";

const AuthContect = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return <>
        <div>
            <AuthContect.Provider value={{user, login, logout }}>
                {children}
            </AuthContect.Provider>
        </div>
    </>
}
export const useAuth = () => {
    return useContext(AuthContect)
}