import React, { useContext } from 'react';
import { UserContext } from '../../components/auth/UserContext';
import Spinner from '../../components/Spinner';
import { AdminDashboard } from './admin';
import SaleDashboard from './sale';
import StoreDashboard from './store';

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Spinner />;
  }

  let dashboardComponent;

  if (currentUser.role === 'SELLER') {
    dashboardComponent = <SaleDashboard />;
  } else if (currentUser.role === 'STORE') {
    dashboardComponent = <StoreDashboard />;
  } else if (currentUser.role === 'ADMIN') {
    dashboardComponent = <AdminDashboard />;
  }

  return <div>{dashboardComponent}</div>;
};

export default Dashboard;