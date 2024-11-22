import React from 'react';

import StatusClient from '../StatusClient/StatusClient';
import MembershipSummaryClient from '../MembershipSummaryClient/MembershipSummaryClient';
const SummaryClient: React.FC = () => {
  return (
    <>
      <StatusClient />
      <MembershipSummaryClient />
    </>
  );
};

export default SummaryClient;
