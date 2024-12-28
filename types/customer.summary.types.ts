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
  mainPrice: number | null;
}
export interface ClientSummary {
  customerId?: string;
  customerName?: string;
  customerEmail?: string;
  isFetching?: boolean;
}

export interface FamilySummary extends ClientSummary {
  familyId?: string | null;
  familyName?: string | null;
}

export interface CompanySummary extends ClientSummary {
  companyName: string | null;
}
