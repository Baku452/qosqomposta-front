import {
  FETCH_CLIENTS,
  SET_EDIT_MODE_ALL_CLIENT_ROWS,
  SET_EDIT_MODE_CLIENT_ROW,
  SET_FILTER_LIST_CLIENTS,
} from '@/actions/actionsTypes';
import { DEFAULT_SERVICE_FILTER } from '@/main.config';
import { ListClients } from '@/types/clientsTypes';
import { AnyAction } from 'redux';

export const initialState: ListClients = {
  filters: {
    service: {
      value: DEFAULT_SERVICE_FILTER,
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

    case SET_EDIT_MODE_CLIENT_ROW: {
      const { recordId, isEditing } = action.payload;
      const currentClients = state.clients ? [...state.clients] : [];
      const updatedClients = currentClients.map(client => {
        if (client._id === recordId) {
          return {
            ...client,
            isEditing: isEditing,
          };
        } else return { ...client, isEditing: false };
      });

      return {
        ...state,
        clients: updatedClients,
      };
    }
    case SET_EDIT_MODE_ALL_CLIENT_ROWS: {
      const { isEditing } = action.payload;
      const currentClients = state.clients ? [...state.clients] : [];
      const updatedClients = currentClients.map(client => {
        return { ...client, isEditing: isEditing };
      });

      return {
        ...state,
        clients: updatedClients,
      };
    }

    default:
      return state;
  }
};
