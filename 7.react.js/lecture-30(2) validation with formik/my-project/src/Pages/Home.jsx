import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div className='flex h-screen  justify-center items-center'>
      <div className=' p-12 border-4 border-solid border-black'>
        <h1 className='p-2 text-2xl font-bold'>Home Page</h1>
        <p className=' p-2'>Welcome {localStorage.getItem('name')}</p>
        <button className='w-full mt-4 hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black' onClick={logout}>Logout</button>
        <button className='w-full mt-4 hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black' onClick={deleteAccount}>Delete</button>
      </div>
    </div>
  )
}

export default Home
