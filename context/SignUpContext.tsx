import { DEFAULT_LATITUDE_MAP, DEFAULT_LONGITUTED_MAP } from '@/main.config';
import { InputsSignUpForm } from '@/types/mainTypes';
import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

export interface SignUpContextType {
  formState: InputsSignUpForm;
  setFormState: Dispatch<SetStateAction<InputsSignUpForm>>;
}

const SignUpContext = createContext<SignUpContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const defaultState: InputsSignUpForm = {
  name: '',
  lastname: '',
  mother_last_name: '',
  password: '',
  confirmPassword: '',
  email: '',
  location: {
    address: '',
    latitude: DEFAULT_LATITUDE_MAP,
    longitude: DEFAULT_LONGITUTED_MAP,
    reference: '',
  },
  dateBirth: new Date(),
  membership: '',
  phoneNumber: '',
  paymentMethod: '',
};
export const SignUpContextProvider: React.FC<Props> = ({ children }) => {
  const [initialState, setState] = useState<InputsSignUpForm>(defaultState);

  const contextValue: SignUpContextType = {
    formState: initialState,
    setFormState: setState,
  };

  return <SignUpContext.Provider value={contextValue}>{children}</SignUpContext.Provider>;
};

export default SignUpContext;
