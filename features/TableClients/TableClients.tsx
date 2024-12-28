import styles from './tableClients.module.scss';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { FilterParamsClients } from '@/types/mainTypes';
import { State } from '@/reducers/rootReducer';
import { useSelector } from 'react-redux';
import {
  fetchClients,
  setEditModeAllClientRows,
  setFiltersClients,
} from '@/actions/user.app.actions';
import { useDispatch } from 'react-redux';
import SortableButton from '@/components/atoms/SortableButton/SortableButton';
import LoadingRecords from '@/components/molecules/LoadingRecords/LoadingRecords';
import Pagination from '@/components/molecules/Pagination/Pagination';
import { DEFAULT_PAGE_START, PAGE_SIZE } from '@/main.config';
import { TableRowClient } from './TableRowClient/TableRowClient';
import { TableEditableRowClient } from './TableRowEditableClient/TableRowEditableClient';
import { useClickOutside } from '@/hooks/useClickOutside';
import { NoRecords } from '@/components/atoms/NoRecords/NoRecords';

const TableClients: React.FC = () => {
  const dispatch = useDispatch();

  const tableClientsRef = useRef<HTMLTableElement>(null);
  const { clients, totalClients, page, filters, isFetching } = useSelector(
    (state: State) => state.listClients,
  );

  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_START);

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

  const handleClickOutsideTable = () => {
    dispatch(setEditModeAllClientRows(false));
  };
  useClickOutside(tableClientsRef, handleClickOutsideTable);
  return (
    <>
      {clients && totalClients && (
        <>
          <div className={styles.containerTableUsers}>
            <table
              ref={tableClientsRef}
              cellPadding={1}
              cellSpacing={1}
              className={`text-left font-paragraph ${styles.tableUsers}`}
            >
              <thead></thead>
              {!isFetching && (
                <tbody>
                  {clients.map(client =>
                    !client.isEditing ? (
                      <TableRowClient key={client._id} client={client} />
                    ) : (
                      <TableEditableRowClient key={client._id} client={client} />
                    ),
                  )}
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
        </>
      )}
      {clients && clients.length === 0 && <NoRecords />}
    </>
  );
};

export default TableClients;
