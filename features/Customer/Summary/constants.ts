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
  },
  {
    title: 'R.R (kg)',
    key: 'residuos reciclables',
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
