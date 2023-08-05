import { setServicesFetched } from '@/actions/services.actions';
import { QosqompostaService, QosqompostaServiceMerged } from '@/types/serviceQosqomposta';
import { mergeServicesByType } from '@/utils/services.utils';
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface ServiceContextType {
  selectedService?: QosqompostaServiceMerged;
  mergedServicesContext?: QosqompostaServiceMerged[];
  servicesContext: QosqompostaService[] | undefined;
  setServicesContext?: React.Dispatch<
    React.SetStateAction<QosqompostaService[] | undefined>
  >;
  setSelectedService: React.Dispatch<
    React.SetStateAction<QosqompostaServiceMerged | undefined>
  >;
}

const QosqompostaServicesContext = createContext<ServiceContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const QosqompostaServicesContextProvider: React.FC<Props> = ({ children }) => {
  const [initialState, setState] = useState<QosqompostaService[] | undefined>();
  const [mergedServices, setMergedServices] = useState<QosqompostaServiceMerged[]>([]);
  const [selectedService, setSelectedService] = useState<
    QosqompostaServiceMerged | undefined
  >();

  const dispatch = useDispatch();
  const contextValue: ServiceContextType = {
    selectedService: selectedService,
    mergedServicesContext: mergedServices,
    servicesContext: initialState,
    setServicesContext: setState,
    setSelectedService: setSelectedService,
  };

  useEffect(() => {
    if (initialState) {
      const mergedServices = mergeServicesByType(initialState);
      setMergedServices(mergedServices);
      dispatch(setServicesFetched(initialState));
      const defaultService = mergedServices.find(
        service => service._id === '644ca2bd0126870ffc92c56c',
      );
      setSelectedService(defaultService);
    }
  }, [initialState]);

  return (
    <QosqompostaServicesContext.Provider value={contextValue}>
      {children}
    </QosqompostaServicesContext.Provider>
  );
};

export default QosqompostaServicesContext;
