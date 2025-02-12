import { VALID_ROLES } from '@/main.config';
import React from 'react';
import { BsGear } from 'react-icons/bs';
import { FaQuestion } from 'react-icons/fa';
import { FaBoxes, FaUser, FaWallet } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GiFlowerPot } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';
import { FaHouseChimney } from 'react-icons/fa6';
import { GoGlobe } from 'react-icons/go';
export interface Aside {
  key: string;
  name: string;
  path: string;
  icon?: React.ReactNode;
  userRole: VALID_ROLES[];
}

export const DASHBOARD_CLIENT_NAV_LINKS: Aside[] = [
  {
    key: 'inicio',
    name: 'Inicio',
    path: '/dashboard',
    userRole: [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <FaHouseChimney size={20} />,
  },
  {
    key: 'perfil',
    name: 'Perfil',
    path: '/dashboard/perfil',
    userRole: [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <FaUser size={20} />,
  },
  {
    key: 'membresia',
    name: 'Servicio',
    path: '/dashboard/servicio',
    userRole: [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <GiFlowerPot size={20} />,
  },
  {
    key: 'facturación',
    name: 'Facturación',
    path: '/dashboard/facturacion',
    userRole: [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <FaWallet size={20} />,
  },
  {
    key: 'recojo',
    name: 'Recojo',
    path: '/dashboard/recojo',
    userRole: [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <MdDirectionsBike size={20} />,
  },
  {
    key: 'faqs',
    name: 'Preguntas Frecuentes',
    path: '/dashboard/faqs',
    userRole: [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <FaQuestion size={20} />,
  },
];

export const DASHBOARD_ADMIN_NAV_LINKS: Aside[] = [
  {
    key: 'resume',
    name: 'Resumen',
    path: '/dashboard',
    icon: <FaHouseChimney size={20} />,
    userRole: [VALID_ROLES.ADMIN],
  },
  {
    key: 'users',
    name: 'Usuarios',
    path: '/dashboard/admin/usuarios',
    icon: <FiUsers size={20} />,
    userRole: [VALID_ROLES.ADMIN],
  },
  {
    key: 'services',
    name: 'Servicios',
    path: '/dashboard/admin/servicios',
    icon: <FaBoxes size={20} />,
    userRole: [VALID_ROLES.ADMIN],
  },
  {
    key: 'compost',
    name: 'Compost',
    path: '/dashboard/compost',
    icon: <RiPlantLine size={20} />,
    userRole: [VALID_ROLES.ADMIN],
  },
  {
    key: 'profile',
    name: 'Configuración',
    path: '/dashboard/admin/config',
    icon: <BsGear size={20} />,
    userRole: [VALID_ROLES.ADMIN],
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

export const DASHBOARD_ASIDE_NAV_LINKS: Aside[] = [
  ...DASHBOARD_ADMIN_NAV_LINKS,
  ...DASHBOARD_CLIENT_NAV_LINKS,
  {
    key: 'web',
    name: 'Ir a la Web',
    path: '/',
    userRole: [VALID_ROLES.ADMIN, VALID_ROLES.CLIENT, VALID_ROLES.COMPANY],
    icon: <GoGlobe size={20} />,
  },
];
