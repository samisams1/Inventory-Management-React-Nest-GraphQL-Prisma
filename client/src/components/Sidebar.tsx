import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar: React.FC = () => {
  return (
    <Drawer
    sx={{
      width: '200px',
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: '200px',
        boxSizing: 'border-box',
      },
    }}
  >
    <List disablePadding>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  </Drawer>
  );
};

export default Sidebar;