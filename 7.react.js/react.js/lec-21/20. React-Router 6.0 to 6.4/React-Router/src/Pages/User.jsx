import React from 'react'
import { useSearchParams , Outlet } from 'react-router-dom'

const User = () => {

  const [searchparams , setSearchParams] = useSearchParams()
  const ActiveUser = searchparams.get('filter') === 'active'
  return (
    <>
      <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <Outlet/>
      </div>
      <div>
        <button onClick={() => setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={() => setSearchParams({})}>All Users</button>
      </div>
      {
        ActiveUser ? <h1>Active User Only</h1> : <h1>All Users</h1>
      }
    </>
  )
}

export default User
