
import { discountInterface } from '../reducers/discountReducer';
import { ActionTypes } from '../types/types';




interface ActiveDiscountAction{
    type:ActionTypes
    payload: discountInterface
}



export type DiscountAction = ActiveDiscountAction;