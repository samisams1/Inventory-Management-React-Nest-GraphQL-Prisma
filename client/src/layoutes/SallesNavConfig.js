import Iconify from "../components/Iconify";
import React from 'react';
const getIcon = (name) => <Iconify icon={name} width={22} height={22} color="#3c44b1" />;

export const SallesNavConfig = [
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
    title: 'Request',
    path: 'request',
    icon: getIcon('fluent-mdl2:review-request-solid'),
  },
  {
    title: 'Request History',
    path: 'requestHistory',
    icon: getIcon('fluent-mdl2:review-request-solid'),
  },
  {
    title: 'Shope Products',
    path: 'shope',
    icon: getIcon('simple-icons:shopee'),
},
{
    title: 'Setting',
    path: 'setting',
    icon: getIcon('uiw:setting'),
},
];
  