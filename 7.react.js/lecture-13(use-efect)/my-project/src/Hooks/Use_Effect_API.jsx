import React from 'react'
import { useState , useEffect } from 'react'

const Use_Effect_API = () => {

    const[UserList ,  setUserList] = useState([])

    console.log(UserList);

      useEffect(() => {
         fetch('https://fakestoreapiserver.reactbd.com/users')
         .then((res) => res.json())
         .then((json) => setUserList (json))
      }, [])
  return (
    <div>
      <table>
        <tr>
            {
                UserList.map((item) => <div>
                    {item._id}
                </div>)   
            }
        </tr>
      </table>
    </div>
  )
}
export default Use_Effect_API
