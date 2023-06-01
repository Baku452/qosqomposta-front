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
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'appUser',
  storage: storage,
  // Add any additional configuration options if needed
};

const persistedAppUserReducer = persistReducer(persistConfig, appUserReducer);

export const initialState: State = {
  appUser: initialUserState,
  listClients: initialListClients,
  services: initialStateServices,
};
export const rootReducer = combineReducers({
  appUser: persistedAppUserReducer,
  services: servicesReducer,
  listClients: listClientsReducer,
});
