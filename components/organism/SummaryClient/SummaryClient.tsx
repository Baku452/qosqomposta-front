import React from 'react';

import styles from './summaryClient.module.scss';
const SummaryClient: React.FC = () => {
  return (
    <div className="flex w-full justify-evenly shadow-lg rounded-lg p-5">
      <div className={styles.cardSummary}>
        <h3>Miembro desde</h3>
      </div>
      <div className={styles.cardSummary}>
        <h3>Compost Acumulado</h3>
      </div>
      <div className={styles.cardSummary}>
        <h3>Total Residuos Acumulados</h3>
      </div>
    </div>
  );
};

export default SummaryClient;
