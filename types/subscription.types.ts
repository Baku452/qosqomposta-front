import { DeliveryOrder } from './delivery_orders.types';
import { ServicePricing } from './service.pricing';

export interface SubscriptionState {
  data?: Subscription;
  isFetching?: boolean;
}
export interface Subscription {
  id: string;
  startDate: Date;
  category: string;
  status: string;
  baldes: number;
  serviceType: string;
  frequencyService: number;
  mainPrice: number;
  pricings: ServicePricing[];
  deliver_orders: DeliveryOrder[];
  dayOfPickup: string;
}
