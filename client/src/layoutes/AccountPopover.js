import * as React from 'react';
import { useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Button } from '@mui/material';
// components
// mocks_
 // ----------------------------------------------------------------------
import MenuPopover from './MenuPopover';
import { UserContext } from '../components/auth/UserContext';
import Spinner from '../components/Spinner';

const MENU_OPTIONS = [
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: 'profile',
  },
];

// ----------------------------------------------------------------------


export default function AccountPopover() {
  const anchorRef = useRef(null);
  const navigate= useNavigate();
  const {currentUser} = React.useContext(UserContext);
  const [open, setOpen] = useState(null);
   //const currentUser = AuthService.getCurrentUser();
   if(!currentUser){
    return <Spinner/>
   }
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
     
       <Avatar  src={require('../assets/sams.jpg'  ) } alt="photoURL" />
      
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
           {currentUser.role}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem>
        <Button>
        <a href="/login" onClick={handleLogout} >
              LogOut
            </a>
        </Button>
       
        </MenuItem>

      </MenuPopover>
    </>
  );
}
