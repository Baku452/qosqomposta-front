import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import { FETCH_USER_APP, REGISTER_USER } from './actionsTypes';
import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { doAsync } from '@/clientApi/clientApi';
import { InputsSignUpForm } from '@/types/mainTypes';

export const setUserApp = (user: UserInfo | unknown): AnyAction => ({
  type: FETCH_USER_APP,
  payload: { user },
});
export const registerUser =
  (user: InputsSignUpForm) => async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      REGISTER_USER,
      'user',
      { method: 'POST' },
      undefined,
      user,
    ).then(data => {
      return data;
    });
  };
