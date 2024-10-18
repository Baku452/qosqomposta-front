import { doAsync } from '@/clientApi/clientApi';
import { FETCH_SUBSCRIPTION_DETAILS } from './actionsTypes';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { CLIENT_TYPE } from '@/constants/services.const';
import { ClientSummary } from '@/types/summary.types';

export interface GetSummaryPayload {
  firebase_uuid: string;
}
export const fetchSubscriptionDetails =
  (firebase_uuid: string, clientType: CLIENT_TYPE) =>
  async (dispatch: Dispatch<AnyAction>) => {
    return doAsync<GetSummaryPayload, void, ClientSummary>(
      dispatch,
      FETCH_SUBSCRIPTION_DETAILS,
      `/${clientType}/summary/${firebase_uuid}`,
      { method: 'GET' },
      undefined,
      {
        firebase_uuid: firebase_uuid,
      },
    );
  };
