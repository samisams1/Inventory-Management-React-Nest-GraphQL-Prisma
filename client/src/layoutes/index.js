import * as React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { UserContext } from '../components/auth/UserContext';
import Spinner from '../components/Spinner';
import Login from '../components/scensComponents/Login/LoginUser';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const currentUser = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing token, user context, etc.
    // Then navigate to the login page
    navigate('/login');
  };

  if (!currentUser || currentUser === null) {
    return <Login />;
  }

  return (
    <RootStyle>
      {currentUser && (
        <>
          {currentUser ? (
            <DashboardNavbar
              onOpenSidebar={() => setOpen(true)}
              onLogout={handleLogout}
            />
          ) : null}
          {currentUser ? (
            <DashboardSidebar
              isOpenSidebar={open}
              onCloseSidebar={() => setOpen(false)}
            />
          ) : null}
        </>
      )}
      {currentUser ? (
        <MainStyle>
          <Outlet />
        </MainStyle>
      ) : null}
    </RootStyle>
  );
}