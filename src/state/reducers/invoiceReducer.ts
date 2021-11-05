import { ActionTypes } from '../types/types';
import { AuthAction } from '../actions/authAction';
import { ProductAction } from '../actions/productAction';
import {  InvoiceInterface } from '../../interfaces/response';
export interface invoicesInterface {
    active?: InvoiceInterface,
    invoices: InvoiceInterface[],
    loading?:boolean,
    nextPage?:string | null,
    previusPage?:string | null

}

const initialState:invoicesInterface = {
    loading: false,
    invoices:[]
}
export const invoiceReducer = (state:invoicesInterface = initialState, action:ProductAction):invoicesInterface=>{
    switch (action.type) {
        
        case ActionTypes.INVOICELIST:
            
            return {
                ...state,
                nextPage: action.payload.nextPage,
                previusPage: action.payload.nextPage,
                invoices:[
                    ...action.payload.results
                ],
                loading:false

            }
        case ActionTypes.INVOICELOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.INVOICECOMPLETE:
            return {
                ...state,
                loading: false
            }
            
        default:
            return state;
    }
}