export interface WasteService {
  waste_service_id: string;
  name: string;
  description: string;
  price: number;
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
  pickupItem_id: number;
  name: string;
  description?: string;
  deletedAt?: Date;
}
