import { AppUser, WasteManagementServices } from '@/types/stateTypes';
import { combineReducers } from 'redux';
import { appUserReducer, initialUserState } from './appUser.reducer';
import { servicesReducer, initialState as initialServiceState } from './services.reducer';

import { initialState as initialUsersReducer, usersReducer } from './users.reducer';
export interface State {
  appUser: AppUser;
  listServices: WasteManagementServices;
  users: UsersState;
  customerApp: CustomerApp;
}
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { CustomerApp } from '@/types/customer.types';
import {
  initialState as initialStateCustomerApp,
  customerReducer,
} from './customer.reducer';
import { UsersState } from '@/types/users.types';

const persistConfig = {
  key: 'appUser',
  storage: storage,
};

const persistedAppUserReducer = persistReducer(persistConfig, appUserReducer);

export const initialState: State = {
  appUser: initialUserState,
  users: initialUsersReducer,
  listServices: initialServiceState,
  customerApp: initialStateCustomerApp,
};
export const rootReducer = combineReducers({
  appUser: persistedAppUserReducer,
  listServices: servicesReducer,
  users: usersReducer,
  customerApp: customerReducer,
});
