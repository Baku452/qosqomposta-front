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
      <div className="bg-white mb-5 p-4">
        <h2 className="font-paragraph font-bold">
          Lista de Qomposteros
          <span className="font-normal font-paragraph ml-2">
            ({clients?.length ?? 0}) total
          </span>
        </h2>
      </div>
      <TableClients />
    </div>
  );
};

export default Clients;
