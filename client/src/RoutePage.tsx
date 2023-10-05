import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layoutes';
import LogoOnlyLayout from './layoutes/LogoOnlyLayout';
import { Order, Product, Store, User } from './pages';
import ForgotPassword from './pages/account/ForgotPassword';
import { Category } from './pages/Category';
import NotFoud from './pages/NotFound';
import { ShopeProduct } from './pages/Product/shope/shopeProduct';
import { Profile } from './pages/Profile';
import Request from "./pages/Request";
import Sale from './pages/Sale';
import Login from './pages/Login';
import Setting from './pages/setting';
import ProtectedRoute from './components/auth/Sami';
import { Sales } from './pages/Sale/Sales';
import Dashboard from './pages/dashboard';
import { Report } from './pages/report/Report';
import { RequestHistory } from './pages/Request/RequestHistory';
import { Purchase } from './pages/purchase';
export default function RoutePage() {

    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
              { path: '/', element: <ProtectedRoute  element={<Dashboard />} /> },
              { path: '/product', element: <ProtectedRoute  element={<Product />} /> },
              { path: '/order', element: <ProtectedRoute  element={<Order />} /> },
              { path: '/request', element: <ProtectedRoute element={<Request />} /> },
              { path: '/category', element: <ProtectedRoute element={<Category />} /> },
              { path: '/shope', element: <ProtectedRoute  element={<ShopeProduct />} /> },
              { path: '/sale', element: <ProtectedRoute  element={<Sale />} /> },
              { path: '/user', element: <ProtectedRoute  element={<User />} /> },
              { path: '/store', element: <ProtectedRoute  element={<Store />} /> },
              { path: '/sales', element: <ProtectedRoute element={<Sales />} /> },
              { path: '/requestHistory', element: <ProtectedRoute element={<RequestHistory />} /> },
              { path: '/attachement', element: <ProtectedRoute element={<Purchase />} /> },
              { path: '/profile', element: <ProtectedRoute  element={<Profile />} /> },
              { path: '/report', element: <ProtectedRoute element={<Report />} /> },
              { path: '/setting', element: <ProtectedRoute  element={<Setting />} /> },

      
            ],
          },
          {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
              { path: '/', element: <Navigate to="/dashboard" /> },
              { path: 'login', element: <Login/> },
              { path:  'forgotPassword', element:<ForgotPassword />},
            ],
          },
          { path: '*', element: <NotFoud /> },

    ]);
}

