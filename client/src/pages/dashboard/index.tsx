import React, { useContext } from 'react';
import { UserContext } from '../../components/auth/UserContext';
import Spinner from '../../components/Spinner';
import { AdminDashboard } from './admin';
import { SellerDashboard } from './sale';
import { StoreDashboard } from './store';

interface CurrentUser {
  role: string;
  // Other properties of the current user
}

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);

  if (currentUser === null) {
    return <Spinner />;
  }

  let dashboardComponent;

  if (currentUser.role === 'SELLER') {
    dashboardComponent = <SellerDashboard />;
  } else if (currentUser.role === 'STORE') {
    dashboardComponent = <StoreDashboard />;
  } else if (currentUser.role === 'ADMIN') {
    dashboardComponent = <AdminDashboard />;
  }

  return <div>{dashboardComponent}</div>;
};

export default Dashboard;