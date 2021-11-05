import { ActionTypes } from '../types/types';
import { AuthAction } from '../actions/authAction';
export interface authInterface {
    checking?: boolean,
    id?: number,
    name?: string
}

const initialState:authInterface = {
    checking: true
}
export const authReducer = (state:authInterface = initialState, action:AuthAction):authInterface=>{
    switch (action.type) {
        
        case ActionTypes.AUTHLOGIN:
            return {
                ...state,
                ...action.payload,
                checking:false

            }
        case ActionTypes.AUTHLOGOUT:
            return {}
        default:
            return state;
    }
}