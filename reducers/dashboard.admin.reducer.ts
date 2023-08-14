import { FETCH_CLIENT_SUMMARY } from '@/actions/admin.actions';
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
    case FETCH_CLIENT_SUMMARY.request:
      return {
        ...action.payload.user,
      };

    default:
      return state;
  }
};
