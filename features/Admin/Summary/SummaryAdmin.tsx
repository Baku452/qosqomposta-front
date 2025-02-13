import React, { useEffect } from 'react';

import { fetchSummaryUsers } from '@/actions/user.app.actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import Spinner from '@/components/atoms/Spinner/Spinner';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaBuilding, FaUsers } from 'react-icons/fa';
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
    <div className="flex w-full flex-col justify-evenly gap-4 p-5 lg:flex-row">
      <div className="flex flex-1 items-center justify-evenly rounded-lg bg-white p-5 text-greenQ shadow-md">
        <div>
          {usersSummary.isFetching ? (
            <Spinner color="white" size="sm" />
          ) : (
            <>
              <p className="font-titles text-4xl font-bold text-greenQ">
                {usersSummary.data?.totalUsers}
              </p>
            </>
          )}
        </div>
        <p className="basis-1/4 font-bold">Usuarios Totales Activos</p>
        <FaUsers size={30} />
      </div>
      <div className="flex flex-1 items-center justify-evenly rounded-lg bg-white p-5 shadow-md">
        <div>
          {usersSummary.isFetching ? (
            <Spinner color="gray" size="sm" />
          ) : (
            <p className="font-titles text-4xl font-bold text-greenQ">
              {usersSummary.data?.totalFamilies}
            </p>
          )}
        </div>
        <p className="basis-1/4 font-bold">Familias Activas</p>
        <MdFamilyRestroom size={30} />
      </div>
      <div className="flex flex-1 items-center justify-evenly rounded-lg bg-white p-5 shadow-md">
        <div>
          {usersSummary.isFetching ? (
            <Spinner color="gray" size="sm" />
          ) : (
            <p className="font-titles text-4xl font-bold text-greenQ">
              {usersSummary.data?.totalCompanies}
            </p>
          )}
        </div>
        <p className="basis-1/4 font-bold">Comercios Activas</p>
        <FaBuilding size={30} />
      </div>
    </div>
  );
};

export default SummaryAdmin;
