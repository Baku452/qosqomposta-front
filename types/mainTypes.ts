export interface AccordionItems {
  title: string;
  content: string;
}

export interface ServiceSectionItem {
  id: string;
  title: string;
  content?: string;
  imageSection?: string;
  accordionItems?: AccordionItems[];
  advertise?: string;
  buttonCTA?: {
    link: string;
    label: string;
  };
}

export interface ImageWeb {
  altTitle: string;
  urlImage: string;
  customClassName?: string;
}

export interface PathPage {
  name: string;
  path: string;
  key: string;
}

export interface AsyncActionType {
  request: string;
  success: string;
  error: string;
}

export interface LocationClient {
  district: string;
  address: string;
  reference: string;
}

export type InputsSignUpForm = {
  membership: string;
  name: string;
  document_identity: string;
  lastname: string;
  mother_last_name: string;
  password: string;
  email: string;
  dateBirth: Date;
  phoneNumber: string;
  paymentMethod: string;
  location: LocationClient;
};

export type AccountInformation = Omit<InputsSignUpForm, 'membership' | 'paymentMethod'>;

export type RegisterUsertDTO = {
  name: string;
  last_name: string;
  mother_last_name: string;
  document_identity: string;
  email: string;
  password: string;
  serviceSelected: string;
  phoneNumber: string;
  address: string;
  district: string;
  reference?: string;
  paymentMethod: string;
};

export type FormLocation = {
  address: string;
  district: string;
  reference: string;
};

export type StepsFormRegister = {
  key: string;
  title: string;
  value: number;
  complete: boolean;
  active: boolean;
};

export type SortCriteria = 'asc' | 'desc' | null;
export interface FilterParam {
  value: string;
}
export interface FilterParamsClients {
  service?: FilterParam;
  name?: FilterParam;
  district?: FilterParam;
  compost?: FilterParam;
  email?: FilterParam;
  direction?: FilterParam;
  reference?: FilterParam;
  phone?: FilterParam;
  sortCriteria?: {
    value: string;
    sortDirection: SortCriteria;
  };
}
export interface TABLE_HEADERS {
  title: string;
  name: keyof FilterParamsClients & Exclude<keyof FilterParamsClients, 'sortCriteria'>;
  sortable?: boolean;
}
