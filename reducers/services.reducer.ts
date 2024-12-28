import {
  FETCH_SERVICES,
  SET_FETCHED_SERVICES,
  SET_SELECTED_SERVICE,
} from '@/actions/actionsTypes';
import { WasteManagementServices } from '@/types/stateTypes';
import { AnyAction } from 'redux';

export const initialState: WasteManagementServices = {
  services: null,
};

export const servicesReducer = (
  state: WasteManagementServices = initialState,
  action: AnyAction,
): WasteManagementServices => {
  switch (action.type) {
    case SET_FETCHED_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case SET_SELECTED_SERVICE:
      return {
        ...state,
        selectedService: action.payload,
      };

    case FETCH_SERVICES.request: {
      return {
        ...state,
        isFetchingServices: true,
      };
    }

    case FETCH_SERVICES.success: {
      return {
        ...state,
        services: action.payload,
        isFetchingServices: false,
      };
    }

    case FETCH_SERVICES.error: {
      return {
        ...state,
        isFetchingServices: false,
      };
    }
    default:
      return state;
  }
};
