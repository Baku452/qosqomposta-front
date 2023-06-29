import { fetchServices } from '@/actions/services.actions';
import { State } from '@/reducers/rootReducer';
import { QosqompostaService } from '@/types/serviceQosqomposta';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const FiltersClients: React.FC = () => {
  const dispatch = useDispatch();
  const services = useSelector((state: State) => state.listServices.services);

  const handleFetchServices = useCallback(async () => {
    await fetchServices()(dispatch);
  }, [dispatch]);

  const getOptionLabel = (option: QosqompostaService) =>
    `${option.name} (${option.modality})`;
  const getOptionValue = (option: QosqompostaService) => option._id;

  useEffect(() => {
    if (!services) {
      handleFetchServices();
    }
  }, []);
  return (
    <div className="mb-4">
      {services && (
        <Select
          options={services}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
        />
      )}
    </div>
  );
};

export default FiltersClients;
