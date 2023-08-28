import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchServices } from '@/actions/services.actions';
import QosqompostaServicesContext from '@/context/ServicesContext';

const ServicesAdmin: React.FC = () => {
  const servicesContext = useContext(QosqompostaServicesContext);
  const dispatch = useDispatch();

  const handleFetchServices = async (): Promise<void> => {
    await fetchServices()(dispatch);
  };
  useEffect(() => {
    !servicesContext && fetchServices();
  }, [servicesContext]);

  return <div></div>;
};
