import { FilterParamsClients } from './mainTypes';
import { QosqompostaService } from './serviceQosqomposta';

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
  service: Partial<QosqompostaService>;
}

export interface ListClients {
  filters: FilterParamsClients;
  clients?: Client[];
  isFetching?: boolean;
  totalClients?: number;
  page?: number;
}
