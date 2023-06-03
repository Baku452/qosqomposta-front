import { fetchClients } from '@/actions/user.app.actions';
import NoRecords from '@/components/molecules/NoRecords/NoRecords';
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
      <h2>Lista de Usuarios</h2>
      {clients && (
        <table>
          <thead>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Tipo de Membresia</th>
            <th>Distrito</th>
            <th>Dirección</th>
            <th>Referencia</th>
            <th>Celular</th>
            <th>Compost Acumulado</th>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client._id}>
                <td>
                  {client.name + ' ' + client.last_name + ' ' + client.mother_last_name}
                </td>
                <td>{client.email}</td>
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
