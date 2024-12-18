import {
  FETCH_CUSTOMER_DELIVERY_ORDERS,
  FETCH_CUSTOMER_FAMILY_SUMMARY,
  FETCH_CUSTOMER_PROFILE,
} from '@/actions/customer.actions.types';
import { CustomerApp } from '@/types/customer.types';
import { AnyAction } from 'redux';

export const initialState: CustomerApp = {
  deliveryOrders: {
    delivery_orders: undefined,
    total_count: undefined,
    isFetching: undefined,
  },
  companySummary: undefined,
  familySummary: undefined,
};
export const customerReducer = (
  state: CustomerApp = initialState,
  action: AnyAction,
): CustomerApp => {
  switch (action.type) {
    case FETCH_CUSTOMER_FAMILY_SUMMARY.request: {
      return {
        ...state,
        familySummary: {
          ...state.familySummary,
          isFetching: true,
        },
      };
    }
    case FETCH_CUSTOMER_FAMILY_SUMMARY.success: {
      return {
        ...state,
        familySummary: {
          ...state.familySummary,
          isFetching: false,
          ...action.payload.customerSummary,
        },
        subscriptionSummary: action.payload.subscriptionSummary,
      };
    }

    case FETCH_CUSTOMER_FAMILY_SUMMARY.error: {
      return {
        ...state,
        familySummary: {
          ...state.familySummary,
          isFetching: false,
        },
      };
    }

    case FETCH_CUSTOMER_DELIVERY_ORDERS.request: {
      return {
        ...state,
        deliveryOrders: {
          ...state.deliveryOrders,
          isFetching: true,
        },
      };
    }

    case FETCH_CUSTOMER_DELIVERY_ORDERS.success: {
      return {
        ...state,
        deliveryOrders: {
          ...state.deliveryOrders,
          isFetching: false,
          ...action.payload,
        },
      };
    }

    case FETCH_CUSTOMER_DELIVERY_ORDERS.error: {
      return {
        ...state,
        deliveryOrders: {
          ...state.deliveryOrders,
          isFetching: false,
        },
      };
    }

    case FETCH_CUSTOMER_PROFILE.request: {
      return {
        ...state,
        customerProfile: {
          ...state.customerProfile,
          isFetching: true,
        },
      };
    }

    case FETCH_CUSTOMER_PROFILE.success: {
      return {
        ...state,
        customerProfile: {
          ...action.payload,
          isFetching: false,
        },
      };
    }

    case FETCH_CUSTOMER_PROFILE.error: {
      return {
        ...state,
        customerProfile: {
          ...action.payload,
          isFetching: false,
        },
      };
    }

    default:
      return state;
  }
};
