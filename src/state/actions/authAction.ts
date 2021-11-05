import { authInterface } from '../reducers/authReducer';
import { ActionTypes } from '../types/types';

interface LoginAction{
    type:ActionTypes
    payload: authInterface
}

export type AuthAction = LoginAction;