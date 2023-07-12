import { fetchServices } from '@/actions/services.actions';
import { State } from '@/reducers/rootReducer';
import { QosqompostaService } from '@/types/serviceQosqomposta';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select, { SingleValue } from 'react-select';
import styles from './filtersClients.module.scss';
import { setFiltersClients } from '@/actions/user.app.actions';

const FiltersClients: React.FC = () => {
  const dispatch = useDispatch();
  const services = useSelector((state: State) => state.listServices.services);

  const [selectedService, setSelectedService] = useState<QosqompostaService | null>(
    services && services[0],
  );
  const handleFetchServices = useCallback(async () => {
    await fetchServices()(dispatch);
  }, [dispatch]);

  const getOptionLabel = (option: QosqompostaService) =>
    `${option.name} (${option.modality})`;
  const getOptionValue = (option: QosqompostaService) => option._id;

  const { filters } = useSelector((state: State) => state.listClients);

  const handleChangeParam = (selectedOption: SingleValue<QosqompostaService>): void => {
    setSelectedService(selectedOption);
    selectedOption?._id &&
      dispatch(
        setFiltersClients({
          ...filters,
          service: {
            value: selectedOption?._id,
          },
        }),
      );
  };
  useEffect(() => {
    if (!services) {
      handleFetchServices();
    }
  }, []);
  return (
    <div className={`mb-5  ${styles.filterClients}`}>
      {services && (
        <div className="flex">
          <div>
            <h4 className="mb-3">Tipo de Servicio</h4>
            <Select
              className="w-[30rem] text-sm"
              options={services}
              value={selectedService}
              onChange={handleChangeParam}
              getOptionLabel={getOptionLabel}
              getOptionValue={getOptionValue}
              placeholder="Seleccionar"
            />
          </div>

          <div>
            <h4 className="mb-3">Distrito</h4>
            <Select
              className="w-72 text-sm"
              options={services}
              getOptionLabel={getOptionLabel}
              getOptionValue={getOptionValue}
              placeholder="Seleccionar"
            />
          </div>

          <div>
            <h4 className="mb-3"></h4>
            <Select
              className="w-72 text-sm"
              options={services}
              getOptionLabel={getOptionLabel}
              getOptionValue={getOptionValue}
              placeholder="Seleccionar"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersClients;
