import { State } from '@/reducers/rootReducer';
import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

//Styles
export interface DashboardProps {
  user?: string;
}
const Clients: NextPage<DashboardProps> = () => {
  return (
    <div>
      <div className="mb-5 bg-white p-4">
        <h2 className="font-paragraph font-bold">Lista de Qomposteros</h2>
      </div>
    </div>
  );
};

export default Clients;
