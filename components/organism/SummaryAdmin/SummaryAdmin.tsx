import React from 'react';

import styles from './summaryAdmin.module.scss';
import Link from 'next/link';
const SummaryAdmin: React.FC = () => {
  return (
    <div className="flex gap-10 w-full justify-evenly p-5">
      <div className={styles.cardSummary}>
        <h3>Compost Acumulado</h3>
        <div className="flex justify-between items-end">
          <p className="font-bold text-2xl">245 kg</p>
          <Link href={'/'} className="text-greenQ">
            Ver Más
          </Link>
        </div>
      </div>
      <div className={styles.cardSummary}>
        <h3>Residuos Acumulados</h3>
        <div className="flex justify-between items-end">
          <p className="font-bold text-2xl">244 kg</p>
          <Link href={'/'} className="text-greenQ">
            Ver Más
          </Link>
        </div>
      </div>
      <div className={styles.cardSummary}>
        <h3>Número de Clientes</h3>
        <div className="flex justify-between items-end">
          <p className="font-bold text-2xl">245 usuarios</p>
          <Link href={'/'} className="text-greenQ">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryAdmin;
