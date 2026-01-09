import { Typography } from '@mui/material'
import React from 'react'

const User = ({user}) => {
  return (
    <>
    <Typography>User: {user?.email}</Typography>
    </>
  )
}
    
export default User