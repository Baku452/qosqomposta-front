import { QosqompostaService } from '@/types/serviceQosqomposta';
import { createContext } from 'react';

export const initialStateServices: QosqompostaService[] = [
    {
        _id: '',
        name: '',
        price: [],
        type: [],
        pick_up_days: [],
        place_of_pickup: [],
        clientType: [],
    },
];
export const QosqompostaServicesContext =
    createContext<QosqompostaService[]>(initialStateServices);
