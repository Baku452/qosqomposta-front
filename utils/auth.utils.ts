import { InputsSignUpForm } from '@/types/mainTypes';

export const makeRegisterUserSchema = (
  formValues: InputsSignUpForm,
  serviceSelected?: string,
) => {
  return {
    name: formValues.name,
    last_name: formValues.lastname,
    mother_last_name: formValues.mother_last_name,
    email: formValues.email,
    password: formValues.password,
    serviceSelected: serviceSelected ?? '',
    phoneNumber: formValues.phoneNumber,
  };
};
