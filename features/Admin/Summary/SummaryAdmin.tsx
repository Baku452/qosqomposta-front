import React, { useEffect } from 'react';

import { fetchSummaryUsers } from '@/actions/user.app.actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import Spinner from '@/components/atoms/Spinner/Spinner';
const SummaryAdmin: React.FC = () => {
  const dispatch = useDispatch();
  const usersSummary = useSelector((state: State) => state.users.summary);
  useEffect(() => {
    const handleFetchUsers = async () => {
      await fetchSummaryUsers()(dispatch);
    };
    handleFetchUsers();
  }, [dispatch]);

  return (
    <div className="flex w-full justify-evenly gap-4 p-5">
      <div className="flex flex-1 items-center justify-evenly rounded-lg bg-greenQ p-5 text-white shadow-md">
        <div>
          {usersSummary.isFetching ? (
            <Spinner color="white" size="sm" />
          ) : (
            <p className="text-2xl font-bold">{usersSummary.data?.totalUsers}</p>
          )}
        </div>
        <p className="font-bold">Usuarios Activos</p>
      </div>
      <div className="flex flex-1 items-center justify-evenly rounded-lg bg-white p-5 shadow-md">
        <div>
          {usersSummary.isFetching ? (
            <Spinner color="gray" size="sm" />
          ) : (
            <p className="text-2xl font-bold">{usersSummary.data?.totalFamilies}</p>
          )}
        </div>
        <p className="font-bold">Familias Activas</p>
      </div>
      <div className="flex flex-1 items-center justify-evenly rounded-lg bg-white p-5 shadow-md">
        <div>
          {usersSummary.isFetching ? (
            <Spinner color="gray" size="sm" />
          ) : (
            <p className="text-2xl font-bold">{usersSummary.data?.totalCompanies}</p>
          )}
        </div>
        <p className="font-bold">Comercios Activas</p>
      </div>
    </div>
  );
};

export default SummaryAdmin;
