import { FETCH_CLIENTS } from '@/actions/actionsTypes';
import { ListClients } from '@/types/clientsTypes';
import { AnyAction } from 'redux';

export const initialState: ListClients = {
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
    case FETCH_CLIENTS.success:
      return {
        clients: action.payload.data,
        isFetching: false,
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
