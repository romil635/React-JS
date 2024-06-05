import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Home from './Home'


const Sing_in_Up = () => {

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome, setshowHome] = useState(false)
    const [show, setshow] = useState(false)
    const localsignUp = localStorage.getItem("signup")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    const localName = localStorage.getItem("name")

    useEffect(() => {
        if (localsignUp) {
            setshowHome(true)
        }
        if (localEmail) {
            setshow(true)
        }
    })

    const handelclick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signup', email.current.value)
            alert('Account successfully created!')
            window.location.reload()
        }
    }

    const handelsignin = () => {
        if (email.current.value == localEmail && password.current.value == localPassword) {
            localStorage.setItem('signup', email.current.value)
            window.location.reload()
        }
        else {
            alert('please enter valid credential')
        }
    }

    return (
        <div>{
            showHome ? <Home /> :
                (
                    show ?
                        <div>
                            <h1>Hello{localName}</h1>
                            <div>
                                <input type="email" placeholder='Email' ref={email} />
                            </div>
                            <div>
                                <input type="password" placeholder='password' ref={password} />
                            </div>
                            <button onClick={handelsignin}>Signin</button>
                        </div>
                        :
                        <div className='flex  justify-center items-center h-screen bg-cyan-300'>
                        <div className='p-12  bg-blue-400  border-2 border-solid border-black shadow-md   shadow-black'>
                            <div>
                                <input className='p-2' type="text" placeholder='name' ref={name} />
                            </div><br/>
                            <div>
                                <input className='p-2' type="email" placeholder='Email' ref={email} />
                            </div><br/>
                            <div>
                                <input  className='p-2' type="password" placeholder='password' ref={password} />
                            </div><br/>
                            <button onClick={handelclick} className='btn w-full'>SignUp</button>
                        </div>
                        </div>
                )
        }
        </div>
    )
}

export default Sing_in_Up
