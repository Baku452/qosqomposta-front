import { AsyncActionTypes } from '@/types/actions.types';

export const UPDATE_CLIENT_INFORMATION = {
  request: 'UPDATE_CLIENT_INFORMATION_REQUEST',
  success: 'UPDATE_CLIENT_INFORMATION_SUCCESS',
  error: 'UPDATE_CLIENT_INFORMATION_ERROR',
};

export const FETCH_USERS_SUMMARY: AsyncActionTypes = {
  request: 'FETCH_USERS_SUMMARY_REQUEST',
  success: 'FETCH_USERS_SUMMARY_SUCCESS',
  error: 'FETCH_USERS_SUMMARY_ERROR',
};
