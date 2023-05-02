import { AppUser, QosqompostaServices } from '@/types/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer, initialUserState } from './appUser.reducer';
import {
    servicesReducer,
    initialState as initialStateServices,
} from './services.reducer';

export interface State {
    appUser: AppUser;
    services: QosqompostaServices;
}

export const initialState: State = {
    appUser: initialUserState,
    services: initialStateServices,
};
export const rootReducer = combineReducers({
    appUser: appUserReducer,
    services: servicesReducer,
});
