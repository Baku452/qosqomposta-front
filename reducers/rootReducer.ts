import { AppUser, ListClients, QosqompostaServices } from '@/types/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer, initialUserState } from './appUser.reducer';
import {
  servicesReducer,
  initialState as initialStateServices,
} from './services.reducer';

import {
  initialState as initialListClients,
  listClientsReducer,
} from './listUsers.reducer';
export interface State {
  appUser: AppUser;
  services: QosqompostaServices;
  listClients: ListClients;
}

export const initialState: State = {
  appUser: initialUserState,
  listClients: initialListClients,
  services: initialStateServices,
};
export const rootReducer = combineReducers({
  appUser: appUserReducer,
  services: servicesReducer,
  listClients: listClientsReducer,
});
