import { Box,Typography,Button,IconButton,Drawer } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Drawer_L from '../components/Drawer_L';

const Header = ({user}) => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        };

  return (
    <>
      <Box as="header" color="black" bgcolor="#aeeaffff" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 2, m: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ mx: 2 }}>家計簿</Typography>
        </Box>
      {user ? (
        <Typography>{user.email}</Typography>
      ) : (
        <Link to="/login">
        <Button variant="contained"  sx={{ px: 3, py: 1 }}>Login</Button>
        </Link>
      )}
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <Drawer_L />
        </Box>
      </Drawer>
    </>
    
  )
}

export default Header