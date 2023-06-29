import { FETCH_CLIENTS, SET_FILTER_LIST_CLIENTS } from '@/actions/actionsTypes';
import { ListClients } from '@/types/clientsTypes';
import { AnyAction } from 'redux';

export const initialState: ListClients = {
  filters: {
    service: {
      value: '',
    },
  },
  isFetching: false,
};

export const listClientsReducer = (
  state: ListClients = initialState,
  action: AnyAction,
): ListClients => {
  switch (action.type) {
    case FETCH_CLIENTS.request:
      return {
        ...state,
        isFetching: true,
      };

    case SET_FILTER_LIST_CLIENTS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }
    case FETCH_CLIENTS.success:
      return {
        ...state,
        clients: action.payload.data,
        isFetching: false,
        totalClients: action.payload.count,
        page: action.payload.page,
      };
    case FETCH_CLIENTS.error:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
