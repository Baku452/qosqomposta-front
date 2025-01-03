import { NextPage } from 'next';
import React from 'react';
import SummaryClient from '@/features/Customer/Summary/SummaryClient/SummaryClient';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import SummaryAdmin from '@/features/SummaryAdmin/SummaryAdmin';
import { VALID_ROLES } from '@/main.config';
export interface DashboardProps {
  user?: string;
}
const Dashboard: NextPage<DashboardProps> = () => {
  const userRoles = useSelector((state: State) => state.appUser.roles);
  return (
    <div className={`w-full`}>
      {userRoles?.includes(VALID_ROLES.ADMIN) && <SummaryAdmin />}
      {userRoles?.includes(VALID_ROLES.CLIENT) && <SummaryClient />}
    </div>
  );
};

export default Dashboard;
