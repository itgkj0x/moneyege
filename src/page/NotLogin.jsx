import React from 'react'
import { Box, Typography } from '@mui/material'
import { Alert } from '@mui/material'
import { Link } from 'react-router-dom'

const NotLogin = () => {
  return (
    <Box sx={{width:"100vw"}}>
    <Alert variant="outlined" severity="info" sx={{mx:"auto",my:3,width:"300px"}}><Link to="/login">ログイン</Link>してください</Alert>
    <Typography sx={{textAlign:"center",m:3}}>ログインするとできること</Typography>
    <Box sx={{mx:3,my:5,display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <ul>
            <li>収支の記録・管理</li>
            <li>月ごとの収支確認</li>
            <li>カテゴリーごとの支出分析</li>
            <li>データのエクスポート</li>
        </ul>
    </Box>      
    </Box>
  )
}

export default NotLogin