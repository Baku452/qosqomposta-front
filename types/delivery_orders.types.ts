import { CourierCustomerView } from './courier.types';

export interface DeliveryOrder {
  id: string;
  date_received: Date;
  waste_weight: number;
  compost?: number;
  peso_balse: number;
  note?: string;
  deleteAt?: Date;
  isGathering?: boolean;
}

export interface DeliveryOrderCustomerView extends DeliveryOrder {
  courier: CourierCustomerView;
}

export interface CustomerDeliveryOrdersState {
  delivery_orders?: DeliveryOrderCustomerView[];
  total_count?: number;
  isFetching?: boolean;
}
