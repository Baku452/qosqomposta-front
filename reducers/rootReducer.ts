import { AppState, AppUser } from '@/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer } from './appUser.reducer';

export interface State {
    appUser: AppUser;
}
export const rootReducer = combineReducers({
    appUser: appUserReducer,
});
