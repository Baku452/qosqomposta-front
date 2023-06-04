import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import {
  FETCH_CLIENTS,
  FETCH_USER_APP,
  REGISTER_USER,
  SET_USER_ROLES,
} from './actionsTypes';
import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { doAsync } from '@/clientApi/clientApi';
import { RegisterUsertDTO } from '@/types/mainTypes';
import { DEFAULT_PAGE_START, PAGE_SIZE } from '@/main.config';

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
  (pageStart?: number) => async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      FETCH_CLIENTS,
      `/user?type=DEFAULT&sortCriteria=name:desc&pageLimit=${PAGE_SIZE}&pageStart=${
        pageStart ?? DEFAULT_PAGE_START
      }`,
      { method: 'GET' },
      undefined,
      undefined,
      true,
    );
  };
