import React from 'react'
import { useEffect } from 'react'

import { signOut } from '../supabase/supabaseAuth'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@mui/material'


const Logout = ({ setUser }) => {

    const navigate = useNavigate()

    useEffect(() => {
        const performLogout = async () => {
            try {
                await signOut();
                setUser(null);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } catch (error) {
                console.error('ログアウトエラー:', error);
                navigate('/login');
            }
        };

        performLogout();
    }, []);

  return (
    <>
    <Typography>ログアウトしました</Typography>
    </>
  )
}

export default Logout