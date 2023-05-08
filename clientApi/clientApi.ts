/* eslint-disable @typescript-eslint/ban-types */
import { createToast } from '@/components/atoms/Toast/ToastApp';
import { AsyncActionType } from '@/types/mainTypes';
import Axios, { AxiosRequestConfig } from 'axios';

// Types
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const TOAST_ERROR_STATUS = [400, 401, 403, 409, 406, 504, 500];

export type AnyData = {} | { example: string };

const doAsync = async <
  T extends AnyData,
  R = void,
  S = T,
  E = string | number | (string | number)[] | T,
>(
  dispatch: Dispatch<AnyAction>,
  action: AsyncActionType,
  url: string,
  axiosConfig?: AxiosRequestConfig,
  options?: {
    whitelist?: RegExp[];
    throwError?: boolean;
    mapRequest?: (payload?: T) => R;
    mapSuccess?: (payload: T) => S;
    mapError?: (payload: unknown) => E;
  },
  payload?: T,
): Promise<T | void> => {
  const {
    mapRequest = (x?: T) => x,
    mapSuccess = (x: T): T => x,
    mapError = (e: unknown) => e,
  } = options || {};
  dispatch({ type: action.request, payload: mapRequest(payload) });

  try {
    const { data } = await Axios({
      url,
      ...axiosConfig,
    });
    dispatch({
      type: action.success,
      payload: mapSuccess(data),
      request: mapRequest(payload),
    });

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (options?.throwError) {
      // eslint-disable-next-line no-console
      console.warn('Do Async ignoring and rethrowing error', err);
      throw err;
    }
    // eslint-disable-next-line no-console
    console.error('clientApi Error', err);
    dispatch({
      type: action.error,
      payload: { error: mapError(err), request: mapRequest(payload) },
    });
    createToast({
      toastType: 'error',
      message: err.response?.data?.message ?? err.message,
      toastId: 'ServiceError',
    });
  }
};

export { doAsync };
