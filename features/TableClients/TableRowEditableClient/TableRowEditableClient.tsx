import { State } from '@/reducers/rootReducer';
import { Client } from '@/types/clientsTypes';
import { QosqompostaService } from '@/types/serviceQosqomposta';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Select, { SingleValue } from 'react-select';

//Context
import PlacesContext, { Districts, PlacesContextType } from '@/context/PlacesContext';
import { DEP_LOCATION_DEFAULT } from '@/main.config';
import { useDispatch } from 'react-redux';
import { setEditModeClientRow } from '@/actions/user.app.actions';

export interface TableRowEditableClientProps {
  client: Client;
}
export const TableEditableRowClient: React.FC<TableRowEditableClientProps> = ({
  client,
}) => {
  const dispatch = useDispatch();
  const services = useSelector((state: State) => state.listServices.services);
  const { cities } = useContext(PlacesContext) as PlacesContextType;

  const getOptionLabel = (option: QosqompostaService) =>
    `${option.name} (${option.modality})`;
  const getOptionValue = (option: QosqompostaService) => option._id;

  const getOptionDistrictsLabel = (option: Districts) => `${option.label}`;
  const getOptionDistrictsValue = (option: Districts) => option.value ?? '';

  const handleChangeService = (selectedOption: SingleValue<QosqompostaService>): void => {
    console.log('handle change service');
  };

  const handleChangeDistrict = (selectedOption: SingleValue<Districts>): void => {
    console.log('handle change service');
  };

  const clientDistric: Districts = {
    nombdep: DEP_LOCATION_DEFAULT,
    value: client.district ?? '',
    label: client.district ?? '',
  };

  const handleClickOutside = () => {
    dispatch(setEditModeClientRow(client._id, false));
  };

  return (
    <tr id={`editRowClient` + client._id} onBlur={handleClickOutside} key={client._id}>
      <td title={client.name + ' ' + client.last_name + ' ' + client.mother_last_name}>
        <input
          type="text"
          value={client.name + ' ' + client.last_name + ' ' + client.mother_last_name}
        />
      </td>
      <td>
        <input type="text" value={client.email} />
      </td>
      <td>
        <Select
          className=" text-sm"
          options={services ?? []}
          defaultValue={client.service as QosqompostaService}
          value={client.service as QosqompostaService}
          onChange={handleChangeService}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          placeholder="Seleccionar"
        />
      </td>
      <td>
        <input type="text" value={client.address} />
      </td>
      <td>
        <Select
          placeholder="Selecciones su distrito"
          value={clientDistric.value ? clientDistric : undefined}
          options={cities ?? []}
          onChange={handleChangeDistrict}
          getOptionLabel={getOptionDistrictsLabel}
          getOptionValue={getOptionDistrictsValue}
        />
      </td>
      <td>
        <input type="text" value={client.reference} />
      </td>
      <td>
        <input type="text" value={client.phoneNumber} />
      </td>
    </tr>
  );
};
