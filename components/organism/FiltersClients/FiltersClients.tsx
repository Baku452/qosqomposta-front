import { fetchServices } from '@/actions/services.actions';
import { State } from '@/reducers/rootReducer';
import { WasteService } from '@/types/wasteManagement';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select, { SingleValue } from 'react-select';
import styles from './filtersClients.module.scss';
import { setFiltersClients } from '@/actions/user.app.actions';
import { DEFAULT_SERVICE_FILTER } from '@/main.config';

const FiltersClients: React.FC = () => {
  const dispatch = useDispatch();
  const services = useSelector((state: State) => state.listServices.services);

  const defaultSelectedService = services?.find(
    service => service.waste_service_id === DEFAULT_SERVICE_FILTER,
  );

  const [selectedService, setSelectedService] = useState<WasteService | null>(
    defaultSelectedService ? defaultSelectedService : null,
  );
  const handleFetchServices = useCallback(async () => {
    await fetchServices()(dispatch);
  }, [dispatch]);

  // const getOptionLabel = (option: WasteService) =>
  //   `${option.name} (${option.modality})`;
  const getOptionValue = (option: WasteService) => option.waste_service_id;

  const { filters } = useSelector((state: State) => state.listClients);

  const handleChangeParam = (selectedOption: SingleValue<WasteService>): void => {
    setSelectedService(selectedOption);
    selectedOption?.waste_service_id &&
      dispatch(
        setFiltersClients({
          ...filters,
          service: {
            value: selectedOption?.waste_service_id,
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
          <div className="mr-4">
            <h4 className="mb-3">Tipo de Servicio</h4>
            <Select
              className="w-[30rem] text-sm"
              options={services}
              defaultValue={selectedService}
              value={selectedService}
              onChange={handleChangeParam}
              // getOptionLabel={getOptionLabel}
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
