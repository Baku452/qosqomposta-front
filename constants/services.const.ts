import { QosqompostaService } from '@/types/serviceQosqomposta';

export interface HEADERS_SELECT {
    name: string;
    key: keyof QosqompostaService;
}

export const TABLE_HEADERS_SELECT: HEADERS_SELECT[] = [
    {
        name: 'Servicio',
        key: 'name',
    },
    {
        name: 'Precio',
        key: 'price',
    },
    {
        name: 'Descripcion',
        key: 'summary',
    },
    {
        name: 'Delivery',
        key: 'delivery',
    },
    {
        name: 'Modalidad',
        key: 'modality',
    },
    {
        name: 'Balde Qompostero',
        key: 'bucket',
    },
    {
        name: 'Dias de Recojo',
        key: 'pick_up_days',
    },
    {
        name: 'Lugares de Recojo',
        key: 'place_of_pickup',
    },
];
