import { FETCH_CLIENTS } from '@/actions/actionsTypes';
import { ListClients } from '@/types/stateTypes';
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
        ...action.payload,
        isFetching: true,
      };
    case FETCH_CLIENTS.success:
      return {
        ...action.payload,
        isFetching: false,
      };
    case FETCH_CLIENTS.error:
      return {
        isFetching: false,
      };

    default:
      return state;
  }
};
