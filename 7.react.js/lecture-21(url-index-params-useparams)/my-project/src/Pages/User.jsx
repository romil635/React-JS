import React from 'react'
import { useSearchParams , Outlet } from 'react-router-dom'


const User = () => {

    const [searchParams , setSearchparams] = useSearchParams()

    const ActiveUser = searchParams.get('filter') === 'active'

  return (
    <>
    <div>
       <div>User 1</div>
       <div>User 2</div>
       <div>User 3</div>
       </div>
       <Outlet/>
       <div>
       <button onClick={() => setSearchparams({filter:"active"})}> Active User</button>
       <button onClick={() => setSearchparams({})}>All User</button>
       </div>
       {
             ActiveUser ? <h1>Active User only</h1> : <h1>All User</h1>
       }
    </>
  )
}

export default User
