export interface WasteService {
  id: string;
  name: string;
  description: string;
  icon?: string;
  deletedAt?: Date;
  pricings?: ServicePricing;
}

export interface SelectedService {
  pricing_id: string;
  name: string;
  price: number;
}

export interface ServicePricing {
  id: string;
  price: number;
  isComposable: boolean;
  name: string;
  frequency: number;
  isAddon?: boolean;
  oneTimePrice?: number;
  pickupItems?: Record<string, unknown>;
  pickupDays?: Record<string, unknown>;
  deletedAt?: Date;
}

export type ServicePricingSummary = Omit<ServicePricing, 'pickupDays' | 'pickupItems'>;
