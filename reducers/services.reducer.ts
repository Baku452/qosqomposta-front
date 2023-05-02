import { SET_SELECTED_SERVICE } from '@/actions/actionsTypes';
import { QosqompostaServices } from '@/types/stateTypes';
import { AnyAction } from 'redux';

export const initialState: QosqompostaServices = {};

export const servicesReducer = (
    state: QosqompostaServices = initialState,
    action: AnyAction,
): QosqompostaServices => {
    switch (action.type) {
        case SET_SELECTED_SERVICE:
            return {
                ...state,
                selectedService: action.payload,
            };
        default:
            return state;
    }
};
