import { AsyncActionTypes } from '@/types/actions.types';

export const FETCH_FAMILY_SUBSCRIPTION: AsyncActionTypes = {
  request: 'FETCH_FAMILY_SUBSCRIPTION_REQUEST',
  success: 'FETCH_FAMILY_SUBSCRIPTION_SUCCESS',
  error: 'FETCH_FAMILY_SUBSCRIPTION_ERROR',
};

export const FETCH_COMPANY_SUBSCRIPTION: AsyncActionTypes = {
  request: 'FETCH_COMPANY_SUBSCRIPTION_REQUEST',
  success: 'FETCH_COMPANY_SUBSCRIPTION_SUCCESS',
  error: 'FETCH_COMPANY_SUBSCRIPTION_ERROR',
};
