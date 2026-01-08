import { Box,Typography,Button } from '@mui/material'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
  return (
    <Box as="header" color="black" bgcolor="#aeeaffff" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 2, m: 0 }}>
      <Box as="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <ListAltRoundedIcon fontSize="large" />
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
  )
}

export default Header