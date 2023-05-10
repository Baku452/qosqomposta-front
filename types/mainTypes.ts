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
  address: string;
  reference: string;
  latitude: number;
  longitude: number;
}

export type InputsSignUpForm = {
  name: string;
  lastname: string;
  mother_last_name: string;
  password: string;
  confirmPassword: string;
  email: string;
  location: LocationClient;
  dateBirth: Date;
  membership: string;
  phoneNumber: string;
  paymentMethod: string;
};

export type RegisterUsertDTO = {
  name: string;
  last_name: string;
  mother_last_name: string;
  email: string;
  password: string;
  serviceSelected: string;
  phoneNumber: string;
};

export type FormLocation = {
  address?: string;
  reference?: string;
};

export type StepsFormRegister = {
  key: string;
  title: string;
  value: number;
  complete: boolean;
  active: boolean;
};
