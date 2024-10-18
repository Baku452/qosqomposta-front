import { ServicePricingSummary } from './wasteManagement';

export interface SubscriptionSummary {
  id: string | null;
  startDate: Date | null;
  category: string;
  status: string | null;
  serviceType: string | null;
  totalWasteWeight: number | null;
  totalWasteWeightYear: number | null;
  totalWasteWeightNet: number | null;
  frequencyService: number | null;
  pricings: ServicePricingSummary[] | null;
}
export interface ClientSummary {
  customerId: string | null;
  customerName: string | null;
  customerEmail: string | null;
  subscription: SubscriptionSummary | null;
}

export interface FamilySummary extends ClientSummary {
  familyId: string | null;
  familyName: string | null;
}
