import { AppState } from '@/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer } from './appuser.reducer';

export const rootReducer = combineReducers({
    appUser: appUserReducer,
});
