import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const result = useSelector((state) => state.Reducer)

    console.warn('HeaderData Called' , result);

    return (
        <div className='h-24 bg-yellow-500 flex justify-between items-center px-20'>
            <NavLink to="/">
                Shop
            </NavLink>
            <NavLink to="/cart">
                <div>
                    <span>{result.length}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Header