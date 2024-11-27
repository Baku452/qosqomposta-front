import React from 'react';

import StatusClient from '../StatusClient/StatusClient';
import MembershipSummary from '../Membership/Membership';
import ServicesData from '../ServicesData/ServicesData';
const SummaryClient: React.FC = () => {
  return (
    <>
      <StatusClient />
      <MembershipSummary />
      <ServicesData />
    </>
  );
};

export default SummaryClient;
