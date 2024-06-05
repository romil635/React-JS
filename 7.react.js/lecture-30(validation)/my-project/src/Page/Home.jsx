import React from 'react'

const Home = () => {

     const logout = () =>{
        localStorage.removeItem('signup')
            window.location.reload()
     }
      const deleteaccount =  () =>{
        localStorage.clear() 
        window.location.reload() 
      } 
  return (
    <div>
      <h1>Home Page</h1><br/>
      <p> Well Come{localStorage.getItem('name')}</p>
      <button onClick={logout} className='btn'>Logout</button><br/>
      <button onClick={deleteaccount} className='btn'>Delete</button>
    </div>
  )
}

export default Home
