import { CustomerDeliveryOrdersState } from './delivery_orders.types';
import { ClientSummaryState, SubscriptionSummary } from './customer.summary.types';
import { Family } from './family.types';
import { SubscriptionState } from './subscription.types';
import { Company } from './company.types';

export interface CustomerApp {
  deliveryOrders: CustomerDeliveryOrdersState;
  summary: ClientSummaryState;
  subscriptionSummary?: SubscriptionSummary;
  profile?: CustomerProfileState;
  subscription?: SubscriptionState;
}

export interface Customer {
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
}

export interface CustomerProfileState {
  data: Customer | Company | null;
  isFetching?: boolean;
}
