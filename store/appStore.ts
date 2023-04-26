import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '@/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const appStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof appStore.getState>;

export { appStore };

export type AppDispatch = typeof appStore.dispatch;
