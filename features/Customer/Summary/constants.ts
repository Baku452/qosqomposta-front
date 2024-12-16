import { TABLE_HEADERS } from '@/types/mainTypes';

export const DELIVERY_ORDERS_HEADERS: TABLE_HEADERS[] = [
  {
    title: 'Fecha',
    key: 'fecha',
  },
  {
    title: 'Hora',
    key: 'hora',
  },
  {
    title: 'R.O (kg)',
    key: 'residuos orgánicos',
    tooltipContent: 'Residuos Orgánicos',
  },
  {
    title: 'R.R (kg)',
    key: 'residuos reciclables',
    tooltipContent: 'Residuos Reciclables',
  },
  {
    title: 'Repartidor',
    key: 'repartidor',
  },
  {
    title: 'Notas',
    key: 'notas',
  },
];
