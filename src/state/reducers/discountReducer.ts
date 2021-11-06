import { ActionTypes } from '../types/types';
import { DiscountAction } from '../actions/discountAction';
export interface discountInterface {
    id?:number,
    amount?:number,
    loading?:boolean,
    total:number,
    code?:string

}
const initialState:discountInterface = {
    id: 0,
    loading: false,
    amount: 0,
    total : 0
}
export const discountReducer = (state:discountInterface = initialState, action:DiscountAction):discountInterface=>{
    switch (action.type) {
    
        case ActionTypes.DISCOUNTACTIVE:
            return {
                ...state,
                amount: action.payload.amount,
                id: action.payload.id,
                code: action.payload.code
                    
                }
        case ActionTypes.DISCOUNTINACTIVE:
            return {
                loading: true,
                total: 0
            }
        case ActionTypes.DISCOUNTUPDATE:
            return{
                ...state,
                total: state!.total + action.payload!.total
            }
            
        default:
            return state;
    }
}