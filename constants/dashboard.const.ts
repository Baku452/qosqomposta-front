import { TABLE_HEADERS } from '@/types/mainTypes';

export const LIST_CLIENTS_HEADERS: TABLE_HEADERS[] = [
  {
    title: 'Usuario',
    name: 'name',
    sortable: true,
  },
  // {
  //   title: 'Correo',
  //   name: 'email',
  // },
  {
    title: 'Servicio',
    name: 'service',
  },
  {
    title: 'Dirección',
    name: 'direction',
  },
  {
    title: 'Distrito',
    name: 'district',
    sortable: true,
  },
  {
    title: 'Referencia',
    name: 'reference',
  },
  {
    title: 'Celular',
    name: 'phone',
  },
  {
    title: 'Compost Acumulado',
    name: 'compost',
    sortable: true,
  },
];
