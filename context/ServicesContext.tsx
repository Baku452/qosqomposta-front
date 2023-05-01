import { QosqompostaService, QosqompostaServiceMerged } from '@/types/serviceQosqomposta';
import { mergeServicesByType } from '@/utils/services.utils';
import React, { createContext, useEffect, useState } from 'react';

export const initialStateServices: QosqompostaService[] = [
    {
        _id: '',
        name: '',
        price: 0,
        type: '',
        pick_up_days: [],
        place_of_pickup: [],
        clientType: [],
    },
];

export interface ContextState {
    mergedServicesContext?: QosqompostaServiceMerged[];
    servicesContext: QosqompostaService[];
    setServicesContext?: React.Dispatch<React.SetStateAction<QosqompostaService[]>>;
}

const QosqompostaServicesContext = createContext<ContextState | null>(null);

interface Props {
    children: React.ReactNode;
}

export const QosqompostaServicesContextProvider: React.FC<Props> = ({ children }) => {
    const [initialState, setState] = useState(initialStateServices);
    const [mergedServices, setMergedServices] = useState<QosqompostaServiceMerged[]>([]);

    const contextValue: ContextState = {
        mergedServicesContext: mergedServices,
        servicesContext: initialState,
        setServicesContext: setState,
    };

    useEffect(() => {
        if (initialState) {
            const mergedServices = mergeServicesByType(initialState);
            setMergedServices(mergedServices);
        }
    }, [initialState]);
    return (
        <QosqompostaServicesContext.Provider value={contextValue}>
            {children}
        </QosqompostaServicesContext.Provider>
    );
};

export default QosqompostaServicesContext;
