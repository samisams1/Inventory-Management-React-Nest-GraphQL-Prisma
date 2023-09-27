import React, { useContext } from 'react';
import { ListItemText } from '@material-ui/core';
import { List, ListItemButton, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StoreNavConfig } from './StoreNavConfig';
import { navConfig } from './NavConfig';
import { UserContext } from '../components/auth/UserContext';
import Spinner from '../components/Spinner';
import { SallesNavConfig } from './SallesNavConfig';

export default function NavSection() {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Spinner />;
  }

  const { role } = currentUser;


  const lists = navConfig.filter((navItem) => navItem);

  const listsStore = StoreNavConfig.filter((navItem) => navItem);

  const listSalles = SallesNavConfig.filter((navItem)=>navItem)

  const listItems = lists.map((navItem) => (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={navItem.title}>
      <ListItemButton onClick={() => routeChange(navItem.path)}>
        <ListItemIcon>{navItem.icon}</ListItemIcon>
        <ListItemText>{navItem.title}</ListItemText>
      </ListItemButton>
    </List>
  ));

  const listItemsSeller = listSalles.map((navItem) => (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={navItem.title}>
      <ListItemButton onClick={() => routeChange(navItem.path)}>
        <ListItemIcon>{navItem.icon}</ListItemIcon>
        <ListItemText>{navItem.title}</ListItemText>
      </ListItemButton>
    </List>
  ));

  const listItemsStore = listsStore.map((navItem) => (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={navItem.title}>
      <ListItemButton onClick={() => routeChange(navItem.path)}>
        <ListItemIcon>{navItem.icon}</ListItemIcon>
        <ListItemText>{navItem.title}</ListItemText>
      </ListItemButton>
    </List>
  ));

  if (role === 'ADMIN') {
    return <ul>{listItems}</ul>;
  } else if (role === 'STORE') {
    return <ul>{listItemsStore}</ul>;
  }else if (role === 'SELLER') {
    return <ul>{listItemsSeller}</ul>;
  }  else {
    return " ";
  }
}