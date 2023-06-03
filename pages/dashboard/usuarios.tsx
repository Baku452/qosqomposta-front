import { fetchClients } from '@/actions/user.app.actions';
import NoRecords from '@/components/molecules/NoRecords/NoRecords';
import { LIST_CLIENTS_HEADERS } from '@/constants/dashboard.const';
import { State } from '@/reducers/rootReducer';
import axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export interface DashboardProps {
  user?: string;
}
const Clients: NextPage<DashboardProps> = () => {
  const dispatch = useDispatch();

  const clients = useSelector((state: State) => state.listClients.clients);
  const fetchUsers = async () => {
    await fetchClients()(dispatch);
  };

  useEffect(() => {
    !clients && fetchUsers();
  }, []);
  return (
    <div>
      <div className="bg-white mb-5 p-4">
        <h2 className="font-paragraph font-bold">
          Lista de Qomposteros
          <span className="font-normal font-paragraph ml-2">
            ({clients?.length ?? 0}) total
          </span>
        </h2>
      </div>
      {clients && (
        <table className="text-left font-paragraph">
          <thead>
            {LIST_CLIENTS_HEADERS.map(thead => (
              <th key={thead.title}>{thead.title}</th>
            ))}
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client._id}>
                <td>
                  {client.name + ' ' + client.last_name + ' ' + client.mother_last_name}
                </td>
                <td>{client.email}</td>
                <td>{client.service.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {clients && clients.length === 0 && <NoRecords />}
    </div>
  );
};

export default Clients;
