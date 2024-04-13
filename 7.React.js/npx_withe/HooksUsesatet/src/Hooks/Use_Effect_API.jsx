import React from 'react'
import { useState , useEffect } from 'react'

const Use_Effect_API = () => {

    const [userList ,setUserList] = useState([])


    useEffect (()=>{
        fetch('https://fakestoreapiserver.reactbd.com/walmart')
        .then((res) => res.json())        
        .then((json) => setUserList(json))        
    }, [])

  return (
    <div>
      <table>
        <tr>
            {
                userList.map((item) =>
                (
                  <>
                <div>
                    {item._id}
                </div>
                  </>
                ))
}
        </tr>
      </table>
    </div>
  )
}

export default Use_Effect_API

/**
 1.Task :- display 20 product with img in card view using useEffect
 2.display to-Do List with useEffect Hooks
 */