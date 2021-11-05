import { ActionTypes } from '../types/types';
import { ClientAction } from '../actions/clientAction';
import { ClientInterface } from '../../interfaces/response';

export interface clientsInterface {
    active?: ClientInterface,
    clients: ClientInterface[],
    loading?:boolean

}
const initialState:clientsInterface = {
    loading: false,
    clients:[]
}

export const clientReducer = (state:clientsInterface = initialState, action:ClientAction):clientsInterface=>{
    switch (action.type) {
        
        case ActionTypes.CLIENTLIST:
            return {
                ...state,
                clients: [
                    ...action.payload
                ],
            }
        case ActionTypes.CLIENTADD:
            return {
                ...state,
                clients: [
                    ...state.clients,
                    action.payload
                ]
            }
        case ActionTypes.CLIENTREMOVE:
            return {
                ...state,
                clients: state.clients.filter(
                    e => ( e.id !== state.active?.id)
                )
            }
        case ActionTypes.CLIENTACTIVE:
            return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}