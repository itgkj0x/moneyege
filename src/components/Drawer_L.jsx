import React from 'react';
import { List, Divider, ListItem, ListItemIcon, ListItemText,ListItemButton} from '@mui/material'
import { Link } from 'react-router-dom';

//Icons
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LogoutIcon from '@mui/icons-material/Logout';

  const Drawer_L = ({user}) => {

    const DrawerList_1 = [
      { icon: HomeFilledIcon, name: 'Home', href: '/' },
    ];

    const DrawerList_2 = user ? [
      { icon: PersonIcon, name: user?.email, href: '/user' },
      { icon: LogoutIcon, name: 'ログアウト', href: '/logout' }
    ] : [
      { icon: LoginIcon, name: 'Login', href: '/login' }
    ];
    
    return (
      <>
    <List>
      {DrawerList_1.map((page, index) =>
      <Link to={page.href} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItem disablePadding>
        <ListItemButton sx={{ color: 'inherit' }}>
        <ListItemIcon>
          {React.createElement(page.icon)}
        </ListItemIcon>
        <ListItemText primary={page.name} />
        </ListItemButton>
        </ListItem>
      </Link>
      )}
    </List>
    
    <Divider />

    <List sx={{position: "absolute", bottom: 2, width: '100%'}}>
      {DrawerList_2.map((page, index) =>
      <Link to={page.href} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItem disablePadding>
        <ListItemButton sx={{ color: 'inherit' }}>
        <ListItemIcon>
          {React.createElement(page.icon)}
        </ListItemIcon>
        <ListItemText primary={page.name} />
        </ListItemButton>
        </ListItem>
      </Link>
      )}
    </List>
    </>
    )
};

export default Drawer_L