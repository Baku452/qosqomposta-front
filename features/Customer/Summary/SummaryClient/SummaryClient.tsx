import React from 'react';

import StatusClient from '../StatusClient/StatusClient';
import MembershipSummary from '../Membership/Membership';
import ServicesData from '../ServicesData/ServicesData';
import DeliveryOrders from '../DeliveryOrders/DeliveryOrders';
const SummaryClient: React.FC = () => {
  return (
    <>
      <StatusClient />
      <MembershipSummary />
      <ServicesData />
      <DeliveryOrders />
    </>
  );
};

export default SummaryClient;
