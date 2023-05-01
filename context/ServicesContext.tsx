import { QosqompostaService, QosqompostaServiceMerged } from '@/types/serviceQosqomposta';
import { mergeServicesByType } from '@/utils/services.utils';
import React, { createContext, useEffect, useState } from 'react';

export const initialStateServices: QosqompostaService[] = [
    {
        _id: '',
        description: '',
        name: '',
        price: 0,
        type: '',
        pick_up_days: [],
        place_of_pickup: [],
        clientType: [],
    },
];

export interface ContextState {
    defaultSelectedService?: string;
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
    const [defaultSelectedService, setDefaultSelectedService] = useState<string>('');

    const contextValue: ContextState = {
        defaultSelectedService: defaultSelectedService,
        mergedServicesContext: mergedServices,
        servicesContext: initialState,
        setServicesContext: setState,
    };

    useEffect(() => {
        if (initialState) {
            const mergedServices = mergeServicesByType(initialState);
            setMergedServices(mergedServices);
            setDefaultSelectedService('644ca19d0126870ffc92c565');
        }
    }, [initialState]);
    return (
        <QosqompostaServicesContext.Provider value={contextValue}>
            {children}
        </QosqompostaServicesContext.Provider>
    );
};

export default QosqompostaServicesContext;
