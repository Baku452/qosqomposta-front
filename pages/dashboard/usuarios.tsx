import { fetchClients } from '@/actions/user.app.actions';
import axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export interface DashboardProps {
  user?: string;
}
const Clients: NextPage<DashboardProps> = () => {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const result = await fetchClients()(dispatch);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Lista de Usuarios</h2>
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
          <td></td>
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
