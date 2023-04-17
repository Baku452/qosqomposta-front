import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import { FETCH_USER_APP } from './actionsTypes';
import { AnyAction } from 'redux';

export const setUserApp = (user: UserInfo | unknown): AnyAction => ({
    type: FETCH_USER_APP,
    payload: { user },
});
