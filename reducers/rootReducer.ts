import { AppUser, WasteManagementServices } from '@/types/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer, initialUserState } from './appUser.reducer';
import { servicesReducer, initialState as initialServiceState } from './services.reducer';

import {
  initialState as initialListClients,
  listClientsReducer,
} from './listUsers.reducer';
export interface State {
  appUser: AppUser;
  listServices: WasteManagementServices;
  listClients: ListClients;
  customerApp: CustomerApp;
}
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ListClients } from '@/types/clientsTypes';

import { CustomerApp } from '@/types/customer.types';
import {
  initialState as initialStateCustomerApp,
  customerReducer,
} from './customer.reducer';

const persistConfig = {
  key: 'appUser',
  storage: storage,
};

const persistedAppUserReducer = persistReducer(persistConfig, appUserReducer);

export const initialState: State = {
  appUser: initialUserState,
  listClients: initialListClients,
  listServices: initialServiceState,
  customerApp: initialStateCustomerApp,
};
export const rootReducer = combineReducers({
  appUser: persistedAppUserReducer,
  listServices: servicesReducer,
  listClients: listClientsReducer,
  customerApp: customerReducer,
});
