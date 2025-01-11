import { WasteService } from '@/types/service.pricing';

export interface HEADERS_SELECT {
  name: string;
  key: keyof WasteService;
}

export const TABLE_HEADERS_SELECT: HEADERS_SELECT[] = [
  {
    name: '',
    key: 'id',
  },
];

export enum CLIENT_TYPE {
  FAMILY = 'customer',
  COMPANY = 'company',
}
