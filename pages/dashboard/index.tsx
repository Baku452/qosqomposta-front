import { NextPage } from 'next';
import React from 'react';
import SummaryClient from '@/features/SummaryClient/SummaryClient';
import PaymentSummary from '@/components/organism/PaymentSummary/PaymentSummary';
import PickUpDates from '@/components/organism/PickupDates/PickUpDates';
import styles from './dashboard.module.scss';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { ValidRoles } from '@/main.config';
import SummaryAdmin from '@/features/SummaryAdmin/SummaryAdmin';
export interface DashboardProps {
  user?: string;
}
const Dashboard: NextPage<DashboardProps> = () => {
  const userRoles = useSelector((state: State) => state.appUser.roles);
  return (
    <div>
      <h1>Dashboard</h1>
      <div className={`w-full ${styles.gridDashboard}`}>
        {userRoles?.includes(ValidRoles.ADMIN) && <SummaryAdmin />}
        {userRoles?.includes(ValidRoles.CLIENT) && (
          <>
            <SummaryClient />
            <PaymentSummary />
            <PickUpDates />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
