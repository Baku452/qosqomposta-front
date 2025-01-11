import { WasteService } from '@/types/service.pricing';
import {
  FETCH_SERVICES,
  SET_FETCHED_SERVICES,
  SET_SELECTED_SERVICE,
} from './actionsTypes';
import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { doAsync } from '@/clientApi/clientApi';

export const setSelectedRegisterService = (serviceId: string): AnyAction => ({
  type: SET_SELECTED_SERVICE,
  payload: serviceId,
});

export const setServicesFetched = (services: WasteService[]): AnyAction => ({
  type: SET_FETCHED_SERVICES,
  payload: services,
});

export const fetchServices = () => async (dispatch: Dispatch<AnyAction>) => {
  return doAsync(
    dispatch,
    FETCH_SERVICES,
    '/waste-management',
    { method: 'GET' },
    undefined,
  );
};
