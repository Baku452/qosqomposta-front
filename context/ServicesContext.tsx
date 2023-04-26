import { QosqompostaService } from '@/types/serviceQosqomposta';
import React, { createContext, useState } from 'react';

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

export interface ContextState {
    servicesContext: QosqompostaService[];
    setServicesContext?: React.Dispatch<React.SetStateAction<QosqompostaService[]>>;
}

const QosqompostaServicesContext = createContext<ContextState | null>(null);

interface Props {
    children: React.ReactNode;
}

export const QosqompostaServicesContextProvider: React.FC<Props> = ({ children }) => {
    const [initialState, setState] = useState(initialStateServices);

    const contextValue: ContextState = {
        servicesContext: initialState,
        setServicesContext: setState,
    };
    return (
        <QosqompostaServicesContext.Provider value={contextValue}>
            {children}
        </QosqompostaServicesContext.Provider>
    );
};

export default QosqompostaServicesContext;
