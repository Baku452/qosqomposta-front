import { StepsFormRegister } from '@/types/mainTypes';

/* eslint-disable no-useless-escape */
export const stepsFormsData: StepsFormRegister[] = [
  {
    key: 'datos_personales',
    title: 'Información de la cuenta',
    value: 0,
    complete: false,
    active: false,
  },
  {
    key: 'datos_recojo',
    title: 'Datos de Recojo',
    value: 1,
    complete: false,
    active: false,
  },
  {
    key: 'modalidad_pago',
    title: 'Modalidad de Pago',
    value: 2,
    complete: false,
    active: false,
  },
  {
    key: 'summary',
    title: 'Resumen Registro',
    value: 3,
    complete: false,
    active: false,
  },
];

//REGEX
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
export const PHONE_REGEX_PATTERN_SIGN =
  /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{2,4}[-\s\.]?[0-9]{4,6}$/im;
export const PHONE_REGEX_PATTERN = /^\+?[0-9]{7,}$/i;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

export const NOT_FILLED_FIELD = 'Este campo no ha sido ingresado';
