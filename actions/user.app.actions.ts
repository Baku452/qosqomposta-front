import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import {
  FETCH_CLIENTS,
  FETCH_USER_APP,
  REGISTER_USER,
  SET_EDIT_MODE_CLIENT_ROW,
  SET_EDIT_MODE_ALL_CLIENT_ROWS,
  SET_FILTER_LIST_CLIENTS,
  SET_USER_ROLES,
} from './actionsTypes';
import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { doAsync } from '@/clientApi/clientApi';
import { FilterParamsClients, RegisterUsertDTO } from '@/types/mainTypes';
import { DEFAULT_PAGE_START, PAGE_SIZE } from '@/main.config';
import { buildFetchUsersURL } from '@/utils/utils';
import { UpdateClient } from '@/types/clientsTypes';
import { UPDATE_CLIENT_INFORMATION } from './user.app.types';

export const setUserApp = (user: UserInfo | unknown): AnyAction => ({
  type: FETCH_USER_APP,
  payload: { user },
});
export const registerUser =
  (user: RegisterUsertDTO) => async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      REGISTER_USER,
      '/user',
      { method: 'POST', data: user },
      undefined,
      {
        user,
      },
    );
  };

export const setUserRoles = (roles: string[]): AnyAction => ({
  type: SET_USER_ROLES,
  payload: { roles },
});

export const fetchClients =
  (pageStart?: number, filters?: FilterParamsClients) =>
  async (dispatch: Dispatch<AnyAction>) => {
    const urlBuild = buildFetchUsersURL(filters);
    return doAsync(
      dispatch,
      FETCH_CLIENTS,
      `/user?${urlBuild}type=DEFAULT&pageStart=${
        pageStart ?? DEFAULT_PAGE_START
      }&pageLimit=${PAGE_SIZE}`,
      { method: 'GET' },
      undefined,
      undefined,
      true,
    );
  };

export const setFiltersClients = (filters: FilterParamsClients): AnyAction => ({
  type: SET_FILTER_LIST_CLIENTS,
  payload: filters,
});

export const setEditModeClientRow = (
  recordId: string,
  isEditing: boolean,
): AnyAction => ({
  type: SET_EDIT_MODE_CLIENT_ROW,
  payload: {
    recordId,
    isEditing,
  },
});

export const setEditModeAllClientRows = (isEditing: boolean): AnyAction => ({
  type: SET_EDIT_MODE_ALL_CLIENT_ROWS,
  payload: {
    isEditing,
  },
});

export const updateClientInformation =
  (uuidClient: string, updatedInfo: UpdateClient) =>
  async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      UPDATE_CLIENT_INFORMATION,
      `/user/${uuidClient}`,
      { method: 'PUT', data: updatedInfo },
      undefined,
      { updatedInfo, uuidClient },
      true,
    );
  };
