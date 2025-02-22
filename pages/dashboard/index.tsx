import { NextPage } from 'next';
import React from 'react';
import SummaryClient from '@/features/Customer/Summary/SummaryClient/SummaryClient';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { VALID_ROLES } from '@/main.config';
import SummaryAdmin from '@/features/Admin/Summary/SummaryAdmin';
export interface DashboardProps {
  user?: string;
}
const Dashboard: NextPage<DashboardProps> = () => {
  const userRoles = useSelector((state: State) => state.appUser.roles);
  return (
    <div className="relative w-full">
      {userRoles?.includes(VALID_ROLES.ADMIN) && <SummaryAdmin />}
      {userRoles?.some(role =>
        [VALID_ROLES.CLIENT, VALID_ROLES.COMPANY].includes(role as VALID_ROLES),
      ) && <SummaryClient />}
    </div>
  );
};

export default Dashboard;
