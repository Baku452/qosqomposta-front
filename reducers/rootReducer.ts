import { AppUser, QosqompostaServices } from '@/types/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer, initialUserState } from './appUser.reducer';

export interface State {
    appUser: AppUser;
}

export const initialState: State = {
    appUser: initialUserState,
};
export const rootReducer = combineReducers({
    appUser: appUserReducer,
});
