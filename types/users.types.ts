import { FilterParamsClients } from './mainTypes';
import { WasteService } from './service.pricing';

export interface Client {
  _id: string;
  name: string;
  last_name: string;
  mother_last_name?: string;
  document_identity?: string;
  email: string;
  roles: string[];
  uid: string;
  district?: string;
  reference?: string;
  address?: string;
  paymentMethod?: string;
  createdAt: string;
  membership: string;
  phoneNumber?: string;
  service: Partial<WasteService>;
  isEditing?: boolean;
  isUpdating?: boolean;
}

export interface UsersSummary {
  totalUsers: number;
  totalFamilies: number;
  totalCompanies: number;
}

export interface UsersState {
  summary: {
    data: UsersSummary | null;
    isFetching: boolean;
  };
}
