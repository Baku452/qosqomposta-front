import { FETCH_COMPANY_PROFILE } from '@/actions/company.actions.types';
import {
  FETCH_CUSTOMER_COMPANY_SUMMARY,
  FETCH_CUSTOMER_DELIVERY_ORDERS,
  FETCH_CUSTOMER_FAMILY_SUMMARY,
  FETCH_CUSTOMER_PROFILE,
} from '@/actions/customer.actions.types';
import {
  FETCH_COMPANY_SUBSCRIPTION,
  FETCH_FAMILY_SUBSCRIPTION,
} from '@/actions/subscriptions.actions.types';
import { CustomerApp } from '@/types/customer.types';
import { AnyAction } from 'redux';

export const initialState: CustomerApp = {
  deliveryOrders: {
    delivery_orders: undefined,
    total_count: undefined,
    isFetching: undefined,
  },
  summary: {
    data: null,
    isFetching: false,
  },
  profile: {
    data: null,
    isFetching: false,
  },
  subscription: undefined,
};
export const customerReducer = (
  state: CustomerApp = initialState,
  action: AnyAction,
): CustomerApp => {
  switch (action.type) {
    case FETCH_CUSTOMER_FAMILY_SUMMARY.request: {
      return {
        ...state,
        summary: {
          ...state.summary,
          data: { ...action.payload },
          isFetching: true,
        },
      };
    }
    case FETCH_CUSTOMER_FAMILY_SUMMARY.success: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: false,
          ...action.payload.customerSummary,
        },
        subscriptionSummary: action.payload.subscriptionSummary,
      };
    }

    case FETCH_CUSTOMER_FAMILY_SUMMARY.error: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: false,
        },
      };
    }

    case FETCH_CUSTOMER_COMPANY_SUMMARY.request: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: true,
        },
      };
    }
    case FETCH_CUSTOMER_COMPANY_SUMMARY.success: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: false,
          ...action.payload.customerSummary,
        },
        subscriptionSummary: action.payload.subscriptionSummary,
      };
    }

    case FETCH_CUSTOMER_COMPANY_SUMMARY.error: {
      return {
        ...state,
        summary: {
          ...state.summary,
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
      console.log(action.payload);
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

    case FETCH_COMPANY_PROFILE.request:
    case FETCH_CUSTOMER_PROFILE.request: {
      return {
        ...state,
        profile: {
          data: {
            ...state.profile?.data,
          },
          isFetching: true,
        },
      };
    }

    case FETCH_COMPANY_PROFILE.success:
    case FETCH_CUSTOMER_PROFILE.success: {
      return {
        ...state,
        profile: {
          data: {
            ...state.profile?.data,
            ...action.payload,
          },
          isFetching: false,
        },
      };
    }
    case FETCH_COMPANY_PROFILE.error:
    case FETCH_CUSTOMER_PROFILE.error: {
      return {
        ...state,
        profile: {
          data: {
            ...state.profile?.data,
          },
          isFetching: false,
        },
      };
    }

    case FETCH_COMPANY_SUBSCRIPTION.request:
    case FETCH_FAMILY_SUBSCRIPTION.request: {
      return {
        ...state,

        subscription: {
          ...state.subscription,
          isFetching: true,
        },
      };
    }

    case FETCH_COMPANY_SUBSCRIPTION.success:
    case FETCH_FAMILY_SUBSCRIPTION.success: {
      return {
        ...state,
        subscription: {
          ...state.subscription,
          isFetching: false,
          data: {
            ...action.payload,
          },
        },
      };
    }

    case FETCH_COMPANY_SUBSCRIPTION.error:
    case FETCH_FAMILY_SUBSCRIPTION.error: {
      return {
        ...state,
        subscription: {
          ...state.subscription,
          isFetching: false,
        },
      };
    }
    default:
      return state;
  }
};
