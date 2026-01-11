import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import React from 'react'

const User = ({user}) => {
  return (
    <>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <AccountCircleIcon sx={{fontSize:50, m:3}}/>
      <Typography variant="h5">{user?.email}</Typography>
    </Box>
    </>
  )
}
    
export default User