import { QosqompostaService, QosqompostaServiceMerged } from '@/types/serviceQosqomposta';
import { mergeServicesByType } from '@/utils/services.utils';
import React, { createContext, useEffect, useState } from 'react';

export interface ContextState {
    defaultSelectedService?: QosqompostaServiceMerged;
    mergedServicesContext?: QosqompostaServiceMerged[];
    servicesContext: QosqompostaService[] | undefined;
    setServicesContext?: React.Dispatch<
        React.SetStateAction<QosqompostaService[] | undefined>
    >;
    setDefaultSelectedService: React.Dispatch<
        React.SetStateAction<QosqompostaServiceMerged | undefined>
    >;
}

const QosqompostaServicesContext = createContext<ContextState | null>(null);

interface Props {
    children: React.ReactNode;
}

export const QosqompostaServicesContextProvider: React.FC<Props> = ({ children }) => {
    const [initialState, setState] = useState<QosqompostaService[] | undefined>();
    const [mergedServices, setMergedServices] = useState<QosqompostaServiceMerged[]>([]);
    const [defaultSelectedService, setDefaultSelectedService] = useState<
        QosqompostaServiceMerged | undefined
    >();

    const contextValue: ContextState = {
        defaultSelectedService: defaultSelectedService,
        mergedServicesContext: mergedServices,
        servicesContext: initialState,
        setServicesContext: setState,
        setDefaultSelectedService: setDefaultSelectedService,
    };

    useEffect(() => {
        if (initialState) {
            const mergedServices = mergeServicesByType(initialState);
            setMergedServices(mergedServices);

            const defaultService = mergedServices.find(
                service => service._id === '644ca2bd0126870ffc92c56c',
            );
            setDefaultSelectedService(defaultService);
        }
    }, [initialState]);

    return (
        <QosqompostaServicesContext.Provider value={contextValue}>
            {children}
        </QosqompostaServicesContext.Provider>
    );
};

export default QosqompostaServicesContext;
