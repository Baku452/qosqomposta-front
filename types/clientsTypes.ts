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
  paymentMethod?: string;
  createdAt: string;
  membership: string;
  service: Partial<QosqompostaService>;
}

export interface ListClients {
  clients?: Client[];
  isFetching?: boolean;
  totalClients?: number;
  page?: number;
}
