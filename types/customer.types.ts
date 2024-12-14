import { CustomerDeliveryOrdersState } from './delivery_orders.types';
import {
  CompanySummary,
  FamilySummary,
  SubscriptionSummary,
} from './customer.summary.types';

export interface CustomerApp {
  deliveryOrders: CustomerDeliveryOrdersState;
  familySummary: FamilySummary | undefined;
  companySummary: CompanySummary | undefined;
  subscriptionSummary?: SubscriptionSummary;
}
