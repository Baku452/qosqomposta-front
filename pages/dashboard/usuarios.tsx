import { fetchClients, setFiltersClients } from '@/actions/user.app.actions';
import NoRecords from '@/components/molecules/NoRecords/NoRecords';
import { LIST_CLIENTS_HEADERS } from '@/constants/dashboard.const';
import { State } from '@/reducers/rootReducer';
import { NextPage } from 'next';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Pagination from '@/components/molecules/Pagination/Pagination';
import { DEFAULT_PAGE_START, PAGE_SIZE } from '@/main.config';
import LoadingRecords from '@/components/molecules/LoadingRecords/LoadingRecords';
import FiltersClients from '@/components/organism/FiltersClients/FiltersClients';
import { FilterParamsClients, SortCriteria } from '@/types/mainTypes';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import SortableButton from '@/components/atoms/SortableButton/SortableButton';
import { toggleSortDirection } from '@/utils/utils';
export interface DashboardProps {
  user?: string;
}
const Clients: NextPage<DashboardProps> = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_START);
  // const [filters, setFilters] = useState<FilterParamsClients>();

  const { clients, totalClients, page, isFetching, filters } = useSelector(
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

  const handleSortDirection = async (value: keyof FilterParamsClients) => {
    const currentFilters = { ...filters };
    const param = currentFilters[value];

    const newSortCriteria = toggleSortDirection(param?.sortCriteria ?? null);
    currentFilters[value] = {
      value: value,
      sortCriteria: newSortCriteria,
    };
    dispatch(setFiltersClients(currentFilters));
  };
  useEffect(() => {
    !clients && fetchUsers(DEFAULT_PAGE_START);
  }, []);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, fetchUsers, filters]);

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
      <FiltersClients />
      {clients && totalClients && (
        <>
          <table className="text-left font-paragraph">
            <thead>
              {LIST_CLIENTS_HEADERS.map(thead => {
                const param = filters[thead.name as keyof FilterParamsClients];
                return (
                  <Fragment key={thead.title}>
                    <th key={thead.title}>{thead.title}</th>
                    {thead.sortable && thead.name && (
                      <SortableButton
                        action={() =>
                          handleSortDirection(thead.name as keyof FilterParamsClients)
                        }
                        order={param?.sortCriteria ?? null}
                      />
                    )}
                  </Fragment>
                );
              })}
            </thead>
            {!isFetching && (
              <tbody>
                {clients.map(client => (
                  <tr key={client._id}>
                    <td>
                      {client.name +
                        ' ' +
                        client.last_name +
                        ' ' +
                        client.mother_last_name}
                    </td>
                    <td>{client.email}</td>
                    <td>{client.service.name}</td>
                    <td>{client.address}</td>
                    <td>{client.district}</td>
                    <td>{client.reference}</td>
                    <td>{client.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            )}
            {isFetching && <LoadingRecords />}
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
