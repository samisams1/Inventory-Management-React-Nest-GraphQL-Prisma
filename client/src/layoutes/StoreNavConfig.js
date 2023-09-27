import Iconify from "../components/Iconify";
import React from 'react';
const getIcon = (name) => <Iconify icon={name} width={22} height={22} color="#3c44b1" />;

export const StoreNavConfig = [
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
    title: 'Order',
    path: 'order',
    icon: getIcon('icon-park-solid:transaction-order'),
  },
  {
    title: 'Store',
    path: 'store',
    icon: getIcon('dashicons:store'),
  },
{
    title: 'Category',
    path: 'category',
    icon: getIcon('dashicons:category'),
},
{
    title: 'Setting',
    path: 'setting',
    icon: getIcon('uiw:setting'),
},

];
  