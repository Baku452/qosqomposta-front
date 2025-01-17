import { doAsync } from '@/clientApi/clientApi';
import { FETCH_COMPANY_PROFILE } from './company.actions.types';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export const fetchCompanyProfile =
  (firebase_uuid: string) => async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      FETCH_COMPANY_PROFILE,
      `/company/by-firebase-uuid?firebaseUid=${firebase_uuid}`,
      { method: 'GET' },
      undefined,
      {
        firebase_uuid: firebase_uuid,
      },
    );
  };
