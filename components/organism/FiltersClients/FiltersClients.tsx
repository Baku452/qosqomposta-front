import { fetchServices } from '@/actions/services.actions';
import { State } from '@/reducers/rootReducer';
import { WasteManagementService } from '@/types/wasteManagement';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select, { SingleValue } from 'react-select';
import styles from './filtersClients.module.scss';
import { setFiltersClients } from '@/actions/user.app.actions';
import { DEFAULT_SERVICE_FILTER } from '@/main.config';
import PlacesContext, { Districts, PlacesContextType } from '@/context/PlacesContext';

const FiltersClients: React.FC = () => {
  const dispatch = useDispatch();
  const services = useSelector((state: State) => state.listServices.services);

  const { cities } = useContext(PlacesContext) as PlacesContextType;

  const defaultSelectedService = services?.find(
    service => service._id === DEFAULT_SERVICE_FILTER,
  );

  const [selectedService, setSelectedService] = useState<WasteManagementService | null>(
    defaultSelectedService ? defaultSelectedService : null,
  );
  const handleFetchServices = useCallback(async () => {
    await fetchServices()(dispatch);
  }, [dispatch]);

  const getOptionLabel = (option: WasteManagementService) =>
    `${option.name} (${option.modality})`;
  const getOptionValue = (option: WasteManagementService) => option._id;

  const getOptionDistrictsLabel = (option: Districts) => `${option.label}`;
  const getOptionDistrictsValue = (option: Districts) => option.value ?? '';

  const { filters } = useSelector((state: State) => state.listClients);

  const handleChangeParam = (
    selectedOption: SingleValue<WasteManagementService>,
  ): void => {
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

  const handleChangeDistrict = (selectedOption: SingleValue<Districts>): void => {
    console.log('handle change service');
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
              getOptionLabel={getOptionLabel}
              getOptionValue={getOptionValue}
              placeholder="Seleccionar"
            />
          </div>

          <div>
            <h4 className="mb-3">Distrito</h4>
            <Select
              placeholder="Selecciones su distrito"
              options={cities ?? []}
              onChange={handleChangeDistrict}
              getOptionLabel={getOptionDistrictsLabel}
              getOptionValue={getOptionDistrictsValue}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersClients;
