import { WasteManagementServiceMerged } from '@/types/serviceQosqomposta';

export interface HEADERS_SELECT {
  name: string;
  key: keyof WasteManagementServiceMerged;
}

export const TABLE_HEADERS_SELECT: HEADERS_SELECT[] = [
  {
    name: '',
    key: '_id',
  },
  {
    name: 'Modalidad',
    key: 'modality',
  },
  {
    name: 'Precio',
    key: 'price',
  },
  {
    name: 'Delivery',
    key: 'delivery',
  },

  {
    name: 'Balde Qompostero',
    key: 'bucket',
  },
  {
    name: 'Dias de Recojo',
    key: 'pick_up_days',
  },
  {
    name: 'Lugares de Recojo',
    key: 'place_of_pickup',
  },
];
