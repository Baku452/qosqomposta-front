import { setEditModeClientRow } from '@/actions/user.app.actions';
import { Client } from '@/types/clientsTypes';
import { useDispatch } from 'react-redux';
import styles from '../tableClients.module.scss';
export interface TableRowClientProps {
  client: Client;
}
export const TableRowClient: React.FC<TableRowClientProps> = ({ client }) => {
  const dispatch = useDispatch();

  const handleRowClick = (recordId: string, isEditing: boolean) => {
    dispatch(setEditModeClientRow(recordId, isEditing));
  };
  return (
    <tr
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        handleRowClick(client._id, true);
      }}
      key={client._id}
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
      {/* <td>{client.email}</td> */}
      <td>{client.service.name}</td>
      <td>{client.address}</td>
      <td>{client.district}</td>
      <td>{client.reference}</td>
      <td>{client.phoneNumber}</td>
    </tr>
  );
};
