import { SET_SELECTED_SERVICE } from './actionsTypes';
import { AnyAction } from 'redux';

export const setSelectedRegisterService = (serviceId: string): AnyAction => ({
    type: SET_SELECTED_SERVICE,
    payload: serviceId,
});
