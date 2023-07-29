import styles from './tableClients.module.scss';
import { LIST_CLIENTS_HEADERS } from '@/constants/dashboard.const';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { FilterParamsClients } from '@/types/mainTypes';
import { State } from '@/reducers/rootReducer';
import { useSelector } from 'react-redux';
import { fetchClients, setFiltersClients } from '@/actions/user.app.actions';
import { useDispatch } from 'react-redux';
import SortableButton from '@/components/atoms/SortableButton/SortableButton';
import LoadingRecords from '@/components/molecules/LoadingRecords/LoadingRecords';
import Pagination from '@/components/molecules/Pagination/Pagination';
import NoRecords from '@/components/molecules/NoRecords/NoRecords';
import { DEFAULT_PAGE_START, PAGE_SIZE } from '@/main.config';

const TableClients: React.FC = () => {
  const { clients, totalClients, page, filters, isFetching } = useSelector(
    (state: State) => state.listClients,
  );

  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_START);

  const dispatch = useDispatch();

  const handleSortDirection = async (
    value: keyof FilterParamsClients & Exclude<keyof FilterParamsClients, 'sortCriteria'>,
  ) => {
    const currentFilters = { ...filters };

    currentFilters[value] = {
      value: value,
    };
    dispatch(setFiltersClients(currentFilters));
  };

  const handleChangePage = (newValue: number) => {
    setCurrentPage(newValue);
  };

  const fetchUsers = useCallback(
    async (page: number) => {
      await fetchClients(page, filters)(dispatch);
    },
    [dispatch, filters],
  );

  useEffect(() => {
    clients === undefined && fetchUsers(currentPage);
  }, []);

  useEffect(() => {
    clients !== undefined && fetchUsers(currentPage);
  }, [filters]);

  useEffect(() => {
    clients !== undefined && fetchUsers(currentPage);
  }, [currentPage]);
  return (
    <>
      {clients && totalClients && (
        <div>
          <div className="overflow-x-scroll">
            <table
              cellPadding={1}
              cellSpacing={1}
              className={`text-left font-paragraph ${styles.tableUsers}`}
            >
              <thead>
                <tr>
                  {LIST_CLIENTS_HEADERS.map(thead => {
                    return (
                      <Fragment key={thead.title}>
                        <th key={thead.title}>
                          {thead.title}
                          {thead.sortable && thead.name && (
                            <SortableButton
                              action={() => handleSortDirection(thead.name)}
                            />
                          )}
                        </th>
                      </Fragment>
                    );
                  })}
                </tr>
              </thead>
              {!isFetching && (
                <tbody>
                  {clients.map(client => (
                    <tr key={client._id}>
                      <td
                        title={
                          client.name +
                          ' ' +
                          client.last_name +
                          ' ' +
                          client.mother_last_name
                        }
                      >
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
            </table>
            {isFetching && <LoadingRecords />}
          </div>

          <Pagination
            pageSize={PAGE_SIZE}
            activePage={Number(page) ?? 0}
            totalCount={totalClients}
            handleChangePage={handleChangePage}
          />
        </div>
      )}
      {clients && clients.length === 0 && <NoRecords />}
    </>
  );
};

export default TableClients;
