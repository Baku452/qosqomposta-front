import { fetchClients } from '@/actions/user.app.actions';
import NoRecords from '@/components/molecules/NoRecords/NoRecords';
import { LIST_CLIENTS_HEADERS } from '@/constants/dashboard.const';
import { State } from '@/reducers/rootReducer';
import axios from 'axios';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Pagination from '@/components/molecules/Pagination/Pagination';
import { DEFAULT_PAGE_START, PAGE_SIZE } from '@/main.config';
export interface DashboardProps {
  user?: string;
}
const Clients: NextPage<DashboardProps> = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_START);
  const { clients, totalClients, page } = useSelector(
    (state: State) => state.listClients,
  );
  const fetchUsers = useCallback(
    async (page: number) => {
      await fetchClients(page)(dispatch);
    },
    [dispatch],
  );

  const handleChangePage = (newValue: number) => {
    setCurrentPage(newValue);
  };
  useEffect(() => {
    !clients && fetchUsers(DEFAULT_PAGE_START);
  }, []);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, fetchUsers]);
  return (
    <div>
      <div className="bg-white mb-5 p-4">
        <h2 className="font-paragraph font-bold">
          Lista de Qomposteros
          <span className="font-normal font-paragraph ml-2">
            ({clients?.length ?? 0}) total
          </span>
        </h2>
      </div>
      {clients && totalClients && (
        <>
          <table className="text-left font-paragraph">
            <thead>
              {LIST_CLIENTS_HEADERS.map(thead => (
                <th key={thead.title}>{thead.title}</th>
              ))}
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client._id}>
                  <td>
                    {client.name + ' ' + client.last_name + ' ' + client.mother_last_name}
                  </td>
                  <td>{client.email}</td>
                  <td>{client.service.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            pageSize={PAGE_SIZE}
            activePage={Number(page) ?? 0}
            totalCount={totalClients}
            handleChangePage={handleChangePage}
          />
        </>
      )}
      {clients && clients.length === 0 && <NoRecords />}
    </div>
  );
};

export default Clients;
