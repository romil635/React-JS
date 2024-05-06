import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {

  const {userId} = useParams()
  return (
    <div>
      <h1>Use Detail Page {userId}</h1>
    </div>
  )
}

export default UserDetail
