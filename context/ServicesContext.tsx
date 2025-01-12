import { setServicesFetched } from '@/actions/services.actions';
import { SelectedService, WasteService } from '@/types/service.pricing';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface ServiceContextType {
  selectedService: SelectedService | null;
  services: WasteService[] | null;
  setServices: React.Dispatch<React.SetStateAction<WasteService[] | null>>;
  setSelectedService: React.Dispatch<React.SetStateAction<SelectedService | null>>;
}

const ServicesContext = createContext<ServiceContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const WasteServicesContextProvider: React.FC<Props> = ({ children }) => {
  const [services, setServices] = useState<WasteService[] | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (services) {
      dispatch(setServicesFetched(services));
    }
  }, [dispatch, services]);

  return (
    <ServicesContext.Provider
      value={{
        services,
        selectedService,
        setServices,
        setSelectedService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServicesContext = () => {
  const context = useContext(ServicesContext);
  if (context == null) {
    throw new Error(
      'useServicesContext must be used within a WasteServicesContextProvider',
    );
  }
  return context;
};
