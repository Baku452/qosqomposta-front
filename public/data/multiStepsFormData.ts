import { MultiStepInputs } from 'types/formsTypes';

export const maxSteps = 4;
enum STEPS {
  ZERO = 0,
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
}
export const StepZeroFields: MultiStepInputs[] = [
  {
    label: 'Nombre',
    placeHolder: 'Nombre(s)',
    required: true,
    type: 'text',
    registerName: 'name',
  },
  {
    label: 'Apellidos',
    placeHolder: 'Apellido(s)',
    required: true,
    type: 'text',
    registerName: 'lastName',
  },
  {
    label: 'DNI',
    placeHolder: 'Ejm: 72123334',
    required: true,
    type: 'number',
    registerName: 'dni',
  },
  {
    label: 'Celular',
    placeHolder: 'Ejm: 923111111',
    required: true,
    type: 'number',
    registerName: 'cellphone',
  },
];

export const StepOneFields: MultiStepInputs[] = [
  {
    label: 'Email',
    placeHolder: 'Email',
    required: true,
    type: 'text',
    registerName: 'email',
  },
  {
    label: 'Contraseña',
    placeHolder: 'Contraseña',
    required: true,
    type: 'password',
    registerName: 'password',
  },
];

export const StepTwoFields: MultiStepInputs[] = [
  {
    label: 'Dirección',
    placeHolder: 'Dirección',
    required: true,
    type: 'text',
    registerName: 'address',
  },
  {
    label: 'Distrito',
    placeHolder: 'Distrito',
    required: true,
    type: 'text',
    registerName: 'district',
  },
  {
    label: 'Referencia',
    placeHolder: 'Referencia',
    required: true,
    type: 'text',
    registerName: 'reference',
  },
];

export const StepThree: MultiStepInputs[] = [];

export const RegisterFormFields = {
  StepZero: {
    value: STEPS.ZERO,
    fields: StepZeroFields,
  },
  FirstStep: {
    value: STEPS.FIRST,
    fields: StepOneFields,
  },
  SecondStep: {
    value: STEPS.SECOND,
    fields: StepTwoFields,
  },
};
