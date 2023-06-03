export interface Client {
  _id: string;
  name: string;
  last_name: string;
  mother_last_name?: string;
  email: string;
  roles: string[];
  uid: string;
  createdAt: string;
  membership: string;
}

export interface ListClients {
  clients?: Client[];
  isFetching?: boolean;
}
