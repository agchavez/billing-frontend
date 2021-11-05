
import { ActionTypes } from '../types/types';
import { ListInvoiceResponse, InvoiceDetailBilling } from '../../interfaces/response';
import { invoiceActive } from '../reducers/invoiceReducer';



interface DeleteInvoiceAction{
    type:ActionTypes
    payload: any
}
interface ListInvoiceAction{
    type:ActionTypes
    payload: ListInvoiceResponse
}
interface AddNewInvoiceAction {
    type:ActionTypes,
    payload: invoiceActive
}



export type InvoiceAction = DeleteInvoiceAction | ListInvoiceAction | AddNewInvoiceAction;