import { FETCH_USERS_SUMMARY } from '@/actions/user.app.types';
import { UsersState } from '@/types/users.types';
import { AnyAction } from 'redux';

export const initialState: UsersState = {
  summary: {
    data: null,
    isFetching: false,
  },
};

export const usersReducer = (
  state: UsersState = initialState,
  action: AnyAction,
): UsersState => {
  switch (action.type) {
    case FETCH_USERS_SUMMARY.request: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: true,
        },
      };
    }

    case FETCH_USERS_SUMMARY.success: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: false,
          data: action.payload,
        },
      };
    }

    case FETCH_USERS_SUMMARY.error: {
      return {
        ...state,
        summary: {
          ...state.summary,
          isFetching: false,
        },
      };
    }

    default:
      return state;
  }
};
