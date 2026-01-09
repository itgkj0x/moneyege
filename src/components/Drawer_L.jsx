import React from 'react';
import { Box,List,Divider,ListItem,ListItemIcon,ListItemText } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';


  const Drawer_L = () => {

    const DrawerList = ['All mail', 'Trash', 'Spam']
    
    return (
      <>
    <List>
      {DrawerList.map((page, index) =>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={page} />
          </ListItemButton>
        </ListItem>
      )}
    </List>
    <Divider />
    </>
  )
};

export default Drawer_L