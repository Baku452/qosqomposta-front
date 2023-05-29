import { InputsSignUpForm, RegisterUsertDTO } from '@/types/mainTypes';

export const makeRegisterUserSchema = (
  formValuesAccount: InputsSignUpForm,
  serviceSelected?: string,
): RegisterUsertDTO => {
  return {
    name: formValuesAccount.name,
    last_name: formValuesAccount.lastname,
    document_identity: formValuesAccount.document_identity,
    mother_last_name: formValuesAccount.mother_last_name,
    email: formValuesAccount.email,
    password: formValuesAccount.password,
    serviceSelected: serviceSelected ?? '',
    phoneNumber: formValuesAccount.phoneNumber,
    address: formValuesAccount.location.address,
    district: formValuesAccount.location.district,
    reference: formValuesAccount.location.reference,
    paymentMethod: formValuesAccount.paymentMethod,
  };
};
