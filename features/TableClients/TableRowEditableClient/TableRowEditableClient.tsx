import { State } from '@/reducers/rootReducer';
import { Client, UpdateClient } from '@/types/clientsTypes';
import { WasteManagementService } from '@/types/serviceQosqomposta';
import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Select, { SingleValue } from 'react-select';

//Context
import PlacesContext, { Districts, PlacesContextType } from '@/context/PlacesContext';
import { DEP_LOCATION_DEFAULT } from '@/main.config';
import { useDispatch } from 'react-redux';
import { updateClientInformation } from '@/actions/user.app.actions';
import styles from '../tableClients.module.scss';

export interface TableRowEditableClientProps {
  client: Client;
}
export const TableEditableRowClient: React.FC<TableRowEditableClientProps> = ({
  client,
}) => {
  const clientDistric: Districts = {
    nombdep: DEP_LOCATION_DEFAULT,
    value: client.district ?? '',
    label: client.district ?? '',
  };

  const { uid: userUid, roles: userRoles } = useSelector((state: State) => state.appUser);
  const [editClient] = useState<Client>(client);
  const [selectedServices, setSelectedService] = useState<WasteManagementService>(
    client.service as WasteManagementService,
  );
  const [selectedDistrict, setSelectedDistrict] = useState<Districts>(clientDistric);
  const [reference, setReference] = useState<string | undefined>(client.reference);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(client.phoneNumber);
  const [address, setAddress] = useState<string | undefined>(client.address);

  const dispatch = useDispatch();
  const services = useSelector((state: State) => state.listServices.services);
  const { cities } = useContext(PlacesContext) as PlacesContextType;

  const rowRef = useRef<HTMLTableRowElement>(null);
  const getOptionLabel = (option: WasteManagementService) =>
    `${option.name} (${option.modality})`;
  const getOptionValue = (option: WasteManagementService) => option._id;

  const getOptionDistrictsLabel = (option: Districts) => `${option.label}`;
  const getOptionDistrictsValue = (option: Districts) => option.value ?? '';

  const handleChangeService = (
    selectedOption: SingleValue<WasteManagementService>,
  ): void => {
    selectedOption && setSelectedService(selectedOption);
  };

  const handleChangeDistrict = (selectedOption: SingleValue<Districts>): void => {
    selectedOption && setSelectedDistrict(selectedOption);
  };

  const handleChangeInput =
    (setState: React.Dispatch<React.SetStateAction<string | undefined>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };

  const handleBlurRow = async (clientUuid: string) => {
    if (
      reference !== client.reference ||
      selectedDistrict !== client.district ||
      selectedServices._id !== client.service._id ||
      phoneNumber !== client.phoneNumber ||
      address !== client.phoneNumber
    ) {
      await updateClientInformation(clientUuid, {
        reference: reference,
        district: selectedDistrict.value,
        selectedServiceId: selectedServices._id,
        phoneNumber: phoneNumber,
        address: address,
        idUserEditing: userUid,
        roleUserEditing: userRoles ?? [],
      })(dispatch);
    }
  };

  // useClickOutside(rowRef, handleBlurRow);
  useEffect(() => {
    const row = document.getElementById(`editRowClient` + editClient._id);
    row?.focus();
  }, []);
  return (
    <tr
      ref={rowRef}
      tabIndex={0}
      id={`editRowClient` + editClient._id}
      onBlur={() => handleBlurRow(editClient.uid)}
      key={editClient._id}
    >
      <td
        className="flex flex-col"
        title={client.name + ' ' + client.last_name + ' ' + client.mother_last_name}
      >
        <h6 className="font-semibold">
          {client.name + ' ' + client.last_name + ' ' + client.mother_last_name}
        </h6>
        <p className={styles.emailField}>{client.email}</p>
      </td>
      <td onClick={e => e.stopPropagation()}>
        <Select
          className=" text-sm"
          options={services ?? []}
          defaultValue={selectedServices}
          value={selectedServices}
          onChange={handleChangeService}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          placeholder="Servicio Q"
        />
      </td>
      <td>
        <input type="text" onChange={handleChangeInput(setAddress)} value={address} />
      </td>
      <td onClick={e => e.stopPropagation()}>
        <Select
          placeholder="Distrito"
          defaultValue={selectedDistrict}
          value={selectedDistrict}
          options={cities ?? []}
          onChange={handleChangeDistrict}
          getOptionLabel={getOptionDistrictsLabel}
          getOptionValue={getOptionDistrictsValue}
        />
      </td>
      <td>
        <input type="text" onChange={handleChangeInput(setReference)} value={reference} />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChangeInput(setPhoneNumber)}
          value={phoneNumber}
        />
      </td>
    </tr>
  );
};
