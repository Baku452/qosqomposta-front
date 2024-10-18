import { WasteService } from '@/types/wasteManagement';

export interface HEADERS_SELECT {
  name: string;
  key: keyof WasteService;
}

export const TABLE_HEADERS_SELECT: HEADERS_SELECT[] = [
  {
    name: '',
    key: 'waste_service_id',
  },
  {
    name: 'Precio',
    key: 'price',
  },
];

export enum CLIENT_TYPE {
  CUSTOMER = 'customer',
  COMPANY = 'compnay',
}
