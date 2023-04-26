import { FETCH_USER_APP } from '@/actions/actionsTypes';
import { AppUser } from '@/types/stateTypes';
import { AnyAction } from 'redux';

export const initialUserState: AppUser = {
    displayName: '',
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
        default:
            return state;
    }
};
