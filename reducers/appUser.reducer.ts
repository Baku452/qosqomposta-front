import { FETCH_USER_APP, REGISTER_USER, SET_USER_ROLES } from '@/actions/actionsTypes';
import { AppUser } from '@/types/stateTypes';
import { AnyAction } from 'redux';

export const initialUserState: AppUser = {
  displayName: '',
  name: '',
  uid: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
};

export const appUserReducer = (
  state: AppUser = initialUserState,
  action: AnyAction,
): AppUser => {
  switch (action.type) {
    case FETCH_USER_APP:
      return {
        ...action.payload.user,
      };

    case REGISTER_USER.request:
      return {
        ...action.payload.user,
        isRegistering: true,
      };
    case REGISTER_USER.success:
      return {
        ...action.payload,
        isRegistering: false,
      };
    case REGISTER_USER.error:
      return {
        ...action.payload.user,
        isRegistering: false,
      };

    case SET_USER_ROLES: {
      return {
        ...state,
        roles: [action.payload.roles],
      };
    }
    default:
      return state;
  }
};
