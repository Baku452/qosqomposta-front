import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchServices } from '@/actions/services.actions';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { NoRecords } from '@/components/atoms/NoRecords/NoRecords';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { AddService } from './AddService/AddService';

export const ServicesAdmin: React.FC = () => {
  const services = useSelector((state: State) => state.listServices.services);

  const dispatch = useDispatch();

  const handleFetchServices = async (): Promise<void> => {
    await fetchServices()(dispatch);
  };
  useEffect(() => {
    !services && handleFetchServices();
  }, [services]);
  return (
    <div className="grid grid-cols-3 gap-5">
      {/* <AddService />
      {services ? (
        services.map(service => <ServiceCard key={service._id} service={service} />)
      ) : (
        <NoRecords />
      )} */}
    </div>
  );
};
