import { FETCH_SUBSCRIPTION_DETAILS } from '@/actions/actionsTypes';
import { SubscriptionDetails } from '@/types/stateTypes';
import { AnyAction } from 'redux';

export const initialState: SubscriptionDetails = {
  customerEmail: null,
  customerId: null,
  customerName: null,
  subscription: null,
  isFetching: false,
  familyId: null,
  familyName: null,
};
export const subscriptionReducer = (
  state: SubscriptionDetails = initialState,
  action: AnyAction,
): SubscriptionDetails => {
  switch (action.type) {
    case FETCH_SUBSCRIPTION_DETAILS.request:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUBSCRIPTION_DETAILS.success:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };

    case FETCH_SUBSCRIPTION_DETAILS.error:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
