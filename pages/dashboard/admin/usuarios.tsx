import { State } from '@/reducers/rootReducer';
import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import TableClients from '@/features/TableClients/TableClients';
export interface DashboardProps {
  user?: string;
}
const Clients: NextPage<DashboardProps> = () => {
  const { clients } = useSelector((state: State) => state.listClients);

  return (
    <div>
      <div className="mb-5 bg-white p-4">
        <h2 className="font-paragraph font-bold">
          Lista de Qomposteros
          <span className="ml-2 font-paragraph font-normal">
            ({clients?.length ?? 0}) total
          </span>
        </h2>
      </div>
      <TableClients />
    </div>
  );
};

export default Clients;
