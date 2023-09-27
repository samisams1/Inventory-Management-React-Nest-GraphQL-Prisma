import React, { useState } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon, Settings as SettingsIcon } from '@mui/icons-material';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import IsAuthenticated from '../account/IsAuthenticated';

const AppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = '/login';

    navigate("/login");
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MuiAppBar position="fixed" style={{ backgroundColor: '#83d991' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           SebleWongel Debebe General Trading
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <SettingsIcon sx={{ marginRight: '8px' }} />
              Settings
            </MenuItem>
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={() => navigate("/sale")}>Sale</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </MuiAppBar>
      <div style={{ marginTop: '64px' }}>
        <Sidebar open={isSidebarOpen} onClose={handleSidebarToggle} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <IsAuthenticated>
        <AppBar />
      </IsAuthenticated>
     
      {/* Other components and routes */}
    </Router>
  );
};

export default App;