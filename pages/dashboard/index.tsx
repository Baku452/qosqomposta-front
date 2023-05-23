import { NextPage } from 'next';
import React from 'react';
import SummaryClient from '@/components/organism/SummaryClient/SummaryClient';
import PaymentSummary from '@/components/organism/PaymentSummary/PaymentSummary';
import PickUpDates from '@/components/organism/PickupDates/PickUpDates';
import styles from './dashboard.module.scss';
export interface DashboardProps {
  user?: string;
}
const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <div className={`w-full ${styles.gridDashboard}`}>
      <SummaryClient />
      <PaymentSummary />
      <PickUpDates />
    </div>
  );
};

export default Dashboard;
