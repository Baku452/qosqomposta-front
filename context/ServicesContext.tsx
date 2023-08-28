import { setServicesFetched } from '@/actions/services.actions';
import {
  WasteManagementService,
  WasteManagementServiceMerged,
} from '@/types/wasteManagement';
import { mergeServicesByType } from '@/utils/services.utils';
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface ServiceContextType {
  selectedService?: WasteManagementServiceMerged;
  mergedServicesContext?: WasteManagementServiceMerged[];
  servicesContext: WasteManagementService[] | undefined;
  setServicesContext?: React.Dispatch<
    React.SetStateAction<WasteManagementService[] | undefined>
  >;
  setSelectedService: React.Dispatch<
    React.SetStateAction<WasteManagementServiceMerged | undefined>
  >;
}

const ServicesContext = createContext<ServiceContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const QosqompostaServicesContextProvider: React.FC<Props> = ({ children }) => {
  const [initialState, setState] = useState<WasteManagementService[] | undefined>();
  const [mergedServices, setMergedServices] = useState<WasteManagementServiceMerged[]>(
    [],
  );
  const [selectedService, setSelectedService] = useState<
    WasteManagementServiceMerged | undefined
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
    <ServicesContext.Provider value={contextValue}>{children}</ServicesContext.Provider>
  );
};

export default ServicesContext;
