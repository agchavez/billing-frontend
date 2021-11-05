import { ActionTypes } from '../types/types';
import { AuthAction } from '../actions/authAction';
import { ProductAction } from '../actions/productAction';
import { InvoiceInterface, InvoiceDetailBilling } from '../../interfaces/response';
export interface invoicesInterface {
    active: invoiceActive,
    invoices: InvoiceInterface[],
    loading?:boolean,
    nextPage?:string | null,
    previusPage?:string | null

}
export interface invoiceActive{
    subTotal?:number;
    isv?: number,
    total?: number,
    listInvoiceDetail: InvoiceDetailBilling[]
} 

const initialState:invoicesInterface = {
    loading: false,
    invoices:[],
    active: {
        subTotal: 0,
        isv: 0,
        total: 0,
        listInvoiceDetail: []
    }
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
        case ActionTypes.INVOICEADD:
            return {
                ...state,
                active: {
                     subTotal: state.active?.subTotal + action.payload.subTotal,
                     isv: state.active?.isv + action.payload.isv,
                     total: state.active?.total + action.payload.total,
                     listInvoiceDetail: [
                         ...state.active?.listInvoiceDetail,
                        action.payload.listInvoiceDetail
                     ]
                }
                   
            
            }
            //TODO:Retirar elemento de la fila
        case ActionTypes.INVOICEREMOVE:
            return {
                ...state,
                active: {
                    subTotal: state.active?.subTotal! - action.payload.subTotal,
                    isv: state.active?.isv! - action.payload.isv,
                    total: state.active?.total! - action.payload.total,
                    listInvoiceDetail: [
                        ...state.active?.listInvoiceDetail
                    ]
                }
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