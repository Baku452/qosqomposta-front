import { CustomerDeliveryOrdersState } from './delivery_orders.types';
import { ClientSummaryState, SubscriptionSummary } from './customer.summary.types';
import { Family } from './family.types';
import { SubscriptionState } from './subscription.types';

export interface CustomerApp {
  deliveryOrders: CustomerDeliveryOrdersState;
  summary: ClientSummaryState;
  subscriptionSummary?: SubscriptionSummary;
  customerProfile?: CustomerProfile;
  subscription?: SubscriptionState;
}

export interface CustomerProfile {
  customer_id?: string;
  firebaseUid?: string;
  name?: string;
  document_identity?: number;
  last_name?: string;
  mother_last_name?: string;
  email?: string;
  phoneNumber?: string;
  customId?: string;
  deletedAt?: Date;
  family?: Family;
  isFetching?: boolean;
}
