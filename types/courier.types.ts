import { DeliveryOrder } from './delivery_orders.types';

export interface Courier {
  id: string;
  name: string;
  last_name: string;
  mother_last_name: string;
  document_identity: number;
  email: string;
  phoneNumber: string;
  address: string;
  refAddress: string;
  deletedAt?: Date;
  deliver_orders: DeliveryOrder[];
}

export type CourierCustomerView = Omit<
  Courier,
  | 'document_identity'
  | 'email'
  | 'address'
  | 'refAddress'
  | 'deletedAt'
  | 'deliver_orders'
>;
