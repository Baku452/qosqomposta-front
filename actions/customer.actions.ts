import { doAsync } from '@/clientApi/clientApi';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { CLIENT_TYPE } from '@/constants/services.const';
import { ClientSummary } from '@/types/customer.summary.types';
import {
  FETCH_CUSTOMER_COMPANY_SUMMARY,
  FETCH_CUSTOMER_DELIVERY_ORDERS,
  FETCH_CUSTOMER_FAMILY_SUMMARY,
  FETCH_CUSTOMER_PROFILE,
} from './customer.actions.types';
import { DATE_ORDER } from '@/main.config';

export interface GetSummaryPayload {
  firebase_uuid: string;
}
export const fetchSubscriptionDetails =
  (firebase_uuid: string, clientType: CLIENT_TYPE) =>
  async (dispatch: Dispatch<AnyAction>) => {
    const action: Record<
      CLIENT_TYPE,
      {
        request: string;
        success: string;
        error: string;
      }
    > = {
      customer: FETCH_CUSTOMER_FAMILY_SUMMARY,
      company: FETCH_CUSTOMER_COMPANY_SUMMARY,
    };
    return doAsync<GetSummaryPayload, void, ClientSummary>(
      dispatch,
      action[clientType],
      `/${clientType}/summary/${firebase_uuid}`,
      { method: 'GET' },
      undefined,
      {
        firebase_uuid: firebase_uuid,
      },
    );
  };

export const fetchDeliveryOrders =
  (firebase_uuid: string, limit: number, dateOrder: DATE_ORDER) =>
  async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      FETCH_CUSTOMER_DELIVERY_ORDERS,
      `/delivery-order/subscription/${firebase_uuid}?dateOrder=${dateOrder}&limit=${limit}`,
      { method: 'GET' },
      undefined,
      {
        firebase_uuid: firebase_uuid,
      },
    );
  };

export const fetchCustomerProfile =
  (firebase_uuid: string) => async (dispatch: Dispatch<AnyAction>) => {
    return doAsync(
      dispatch,
      FETCH_CUSTOMER_PROFILE,
      `/customer/by-firebase-uuid?firebaseUid=${firebase_uuid}`,
      { method: 'GET' },
      undefined,
      {
        firebase_uuid: firebase_uuid,
      },
    );
  };
