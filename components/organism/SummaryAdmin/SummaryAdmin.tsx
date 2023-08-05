import React, { useEffect } from 'react';

import styles from './summaryAdmin.module.scss';
import Link from 'next/link';
import { fetchClients } from '@/actions/user.app.actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import Spinner from '@/components/atoms/Spinner/Spinner';
import { LIST_USERS_PATH } from '@/routes/routes.config';
const SummaryAdmin: React.FC = () => {
  const dispatch = useDispatch();

  const clients = useSelector((state: State) => state.listClients.clients);
  const isFetchingClients = useSelector((state: State) => state.listClients.isFetching);

  const fetchUsers = async () => {
    await fetchClients()(dispatch);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
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
          {isFetchingClients && <Spinner />}
          {!isFetchingClients && (
            <p className="font-bold text-2xl">{clients?.length} usuarios</p>
          )}
          <Link href={LIST_USERS_PATH} className="text-greenQ">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryAdmin;
