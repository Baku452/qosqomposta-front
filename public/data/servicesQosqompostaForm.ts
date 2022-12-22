import {
  IncludedNotIncluded,
  OptionServices,
  ServiceQosqomposta,
} from 'types/serviciosQosqomposta';

export const IncludedServices: IncludedNotIncluded[] = [
  {
    id: '1',
    name: 'Balde Q',
  },
  {
    id: '2',
    name: 'Saquillo Q',
  },
];

export const NotIncludedServices: IncludedNotIncluded[] = [
  {
    id: '1',
    name: 'Saquillo Q',
  },
];

export const AvailableDaysOfService: OptionServices[] = [
  {
    id: 'jueves',
    value: 'Jueves',
    label: 'Jueves',
  },
  {
    id: 'viernes',
    value: 'viernes',
    label: 'Viernes',
  },
  {
    id: 'sabado',
    value: 'sabado',
    label: 'Sabado',
  },
];
export const servicesQosqompostaForm: ServiceQosqomposta[] = [
  {
    id: '1',
    description: '',
    image: '',
    name: 'ACOPIO DE RESIDUOS ORGÁNICOS',
    altName: 'Qompostero Clásico',
    pricing: [
      {
        id: 'acopio_individual',
        value: 15,
        label: 'Acopio individual',
      },
    ],
    included: IncludedServices,
    daysOfPickUp: AvailableDaysOfService,
  },
  {
    id: '2',
    description: '',
    image: '',
    name: 'ACOPIO DE RESIDUOS ORGÁNICOS',
    altName: 'Qompostero Clásico',
    pricing: [
      {
        id: 'acopio_individual',
        value: 15,
        label: 'Acopio individual',
      },
    ],
    included: IncludedServices,
    daysOfPickUp: AvailableDaysOfService,
  },
  {
    id: '3',
    description: '',
    image: '',
    name: 'ACOPIO DE RESIDUOS ORGÁNICOS',
    altName: 'Qompostero Clásico',
    pricing: [
      {
        id: 'acopio_individual',
        value: 15,
        label: 'Acopio individual',
      },
    ],
    included: IncludedServices,
    daysOfPickUp: AvailableDaysOfService,
  },
];
