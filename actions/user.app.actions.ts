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

export const fetchClients = () => async (dispatch: Dispatch<AnyAction>) => {
  return doAsync(
    dispatch,
    FETCH_CLIENTS,
    '/user?type=DEFAULT&sortCriteria=name:desc&pageLimit=20&pageStart=1',
    { method: 'GET' },
    undefined,
    undefined,
    true,
  );
};
