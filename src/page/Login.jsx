import { Card, CardContent, TextField, Button, Typography, Snackbar, Alert } from '@mui/material'
import { signIn } from '../supabase/supabaseAuth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setError('')
    const { data, error: signInError } = await signIn(email, password)
    
    if (signInError) {
      setError(signInError.message)
      setOpen(true)
      console.error('Login Error:', signInError)
      return
    }
    
    if (data?.user) {
      console.log('ログイン成功:', data.user.email)
      setUser(data.user);
      navigate('/')
    }
  }

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <>
    <Card sx={{maxWidth:'350px', mx: 'auto', my:7}}>
        <CardContent>
          <Typography variant='h6' sx={{textAlign:"center"}}>ログイン</Typography>
          <TextField label="ユーザー名" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="パスワード" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
            ログイン
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>
        </CardContent>
      </Card>
    </>
  )
}

export default Login