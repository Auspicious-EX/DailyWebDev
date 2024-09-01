import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>i am User {params.username}</div>
  )
}

export default User