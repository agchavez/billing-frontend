
import { ActionTypes } from '../types/types';
import { ListInvoiceResponse } from '../../interfaces/response';



interface DeleteInvoiceAction{
    type:ActionTypes
    payload: any
}
interface ListInvoiceAction{
    type:ActionTypes
    payload: ListInvoiceResponse
}



export type InvoiceAction = DeleteInvoiceAction | ListInvoiceAction;