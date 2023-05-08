import { NextPage } from 'next';
import React from 'react';

export interface DashboardProps {
  user?: string;
}
const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
