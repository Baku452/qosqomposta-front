import { VALID_ROLES } from '@/main.config';
import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { FaBoxes } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiPlantLine } from 'react-icons/ri';

export interface Aside {
  key: string;
  name: string;
  path: string;
  icon?: React.ReactNode;
  userRole: VALID_ROLES;
}

export const DASHBOARD_CLIENT_NAV_LINKS = [
  {
    key: 'resume',
    name: 'Resumen',
    path: '/dashboard',
  },
  {
    key: 'payments',
    name: 'Membresia',
    path: '/dashboard',
  },
  {
    key: 'pickups',
    name: 'Recojos',
    path: '/dashboard',
  },
  {
    key: 'profile',
    name: 'Mi cuenta',
    path: '/dashboard',
  },
];

export const DASHBOARD_ADMIN_NAV_LINKS: Aside[] = [
  {
    key: 'resume',
    name: 'Resumen',
    path: '/dashboard',
    icon: <BiHomeAlt size={20} />,
    userRole: VALID_ROLES.ADMIN,
  },
  {
    key: 'users',
    name: 'Usuarios',
    path: '/dashboard/admin/usuarios',
    icon: <FiUsers size={20} />,
    userRole: VALID_ROLES.ADMIN,
  },
  {
    key: 'services',
    name: 'Servicios',
    path: '/dashboard/admin/servicios',
    icon: <FaBoxes size={20} />,
    userRole: VALID_ROLES.ADMIN,
  },
  {
    key: 'compost',
    name: 'Compost',
    path: '/dashboard',
    icon: <RiPlantLine size={20} />,
    userRole: VALID_ROLES.ADMIN,
  },
  {
    key: 'profile',
    name: 'Configuracion',
    path: '/dashboard',
    icon: <BsGear size={20} />,
    userRole: VALID_ROLES.ADMIN,
  },
];

export const DASHBOARD_COLLECTOR_NAV_LINKS = [
  {
    key: 'resume',
    name: 'Resumen',
    path: '/dashboard',
  },
  {
    key: 'users',
    name: 'Usuarios',
    path: '/dashboard',
  },
  {
    key: 'compost',
    name: 'Compost',
    path: '/dashboard',
  },
  {
    key: 'profile',
    name: 'Configuracion cuenta',
    path: '/dashboard',
  },
];

export const DASHBOARD_BLOGGER_NAV_LINKS = [
  {
    key: 'resume',
    name: 'Resumen',
    path: '/dashboard',
  },
  {
    key: 'users',
    name: 'Usuarios',
    path: '/dashboard/usuarios',
  },
  {
    key: 'compost',
    name: 'Compost',
    path: '/dashboard',
  },
  {
    key: 'profile',
    name: 'Mi cuenta',
    path: '/dashboard',
  },
];

export const DASHBOARD_ASIDE_NAV_LINKS = [{ ...DASHBOARD_ADMIN_NAV_LINKS }];
