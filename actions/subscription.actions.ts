import { doAsync } from '@/clientApi/clientApi';
import { CLIENT_TYPE } from '@/constants/services.const';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import {
  FETCH_COMPANY_SUBSCRIPTION,
  FETCH_FAMILY_SUBSCRIPTION,
} from './subscriptions.actions.types';

export const fetchSubscriptionByClientType =
  (id: string, clientType: string[]) => async (dispatch: Dispatch<AnyAction>) => {
    const endpoint = clientType.includes(CLIENT_TYPE.FAMILY)
      ? `/subscription/family`
      : `/subscription/company`;
    const actionType = clientType.includes(CLIENT_TYPE.FAMILY)
      ? FETCH_FAMILY_SUBSCRIPTION
      : FETCH_COMPANY_SUBSCRIPTION;
    const payloadKey = clientType.includes(CLIENT_TYPE.FAMILY)
      ? 'firebaseUid'
      : 'company_id';

    return doAsync(
      dispatch,
      actionType,
      `${endpoint}`,
      {
        method: 'POST',
        data: {
          [payloadKey]: id,
        },
      },
      undefined,
      {
        [payloadKey]: id,
      },
    );
  };
