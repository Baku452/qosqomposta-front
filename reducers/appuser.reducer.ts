import { AppUser } from '@/stateTypes';
import { AnyAction } from 'redux';

const initialUserState: AppUser = {
    displayName: undefined,
};

export const appUserReducer = (
    state: AppUser = initialUserState,
    action: AnyAction,
): AppUser => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
            };
        default:
            return state;
    }
};
