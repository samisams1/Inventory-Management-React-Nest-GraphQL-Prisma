import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { COUNT_ORDER_QUERY } from "../graphql/Order";
import Spinner from '../components/Spinner';
import Iconify from "../components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} color="#3c44b1" />;

const NavConfig = () => {
  const [updatedNavConfig, setUpdatedNavConfig] = useState([]);
  const { loading, error, data } = useQuery(COUNT_ORDER_QUERY);

  useEffect(() => {
    if (data) {
      const updatedConfig = navConfig.map((item) => {
        if (item.path === 'order') {
          return {
            ...item,
            title: (
              <div className="notification-badge">
                {item.title}
                {data.countOrder > 0 && (
                  <span className="badge">{data.countOrder}</span>
                )}
              </div>
            ),
          };
        }
        return item;
      });
      setUpdatedNavConfig(updatedConfig);
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return updatedNavConfig;
};

export const navConfig = [
  { 
    title: 'Dashboard',
    path: '/',
    icon: getIcon('material-symbols:dashboard'),
  },
  {
    title: 'Profile',
    path: 'profile',

    icon: getIcon('iconamoon:profile-fill'),
  },
  {
    title: 'Product',
    path: 'product',
    icon: getIcon('ri:product-hunt-fill'),
  },
  {
    title: 'Request',
    path: 'request',
    icon: getIcon('fluent-mdl2:review-request-solid'),
  },
  {
    title: 'Order',
    path: 'order',
    icon: getIcon('icon-park-solid:transaction-order'),
  },
  {
    title: 'New Sale',
    path: 'sale',
    icon: getIcon('foundation:burst-sale'),
  },
  {
    title: 'Sales',
    path: 'sales',
    icon: getIcon('fa6-brands:salesforce'),
  },
  {
    title: 'Store',
    path: 'store',
    icon: getIcon('dashicons:store'),
  },
  {
    title: 'Attachement',
    path: 'attachement',
    icon: getIcon('fluent-mdl2:review-request-solid'),
  },
  {
    title: 'User',
    path: 'user',
    icon: getIcon('fa:users'),
  },
  {
    title: 'Shope Products',
    path: 'shope',
    icon: getIcon('simple-icons:shopee'),
},
{
title: 'Category',
  path: 'category',
  icon: getIcon('dashicons:category'),
},
  {
    title: 'Report',
    path: 'report',
    icon: getIcon('mdi:report-areaspline-variant'),
  },
  {
    title: 'Setting',
    path: 'setting',
    icon: getIcon('uiw:setting'),
},
];

export default NavConfig;