import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';

import Swal from 'sweetalert2';
import http from '../../utils/axios';
import { ListInvoiceResponse, InvoiceInterface, InvoiceDetailBilling, InvoiceDetail } from '../../interfaces/response';
import { InvoiceAction } from '../actions/invoiceAction';
import { setClientById } from './clientActionCreators';
import { invoiceActive } from '../reducers/invoiceReducer';

const tokenx = localStorage.getItem('token');

export const startLoadingInvoice = ()=>{
    return  async (dispatch: Dispatch<InvoiceAction>) => {
        dispatch({
            type:ActionTypes.INVOICELOADING,
            payload:[]
        })
        try {
            const resp  = await http.get<ListInvoiceResponse>('/invoices/', {headers: {'token': `${tokenx}`}})
            const data = await load(resp)
                if (resp.status === 200) {
                    dispatch({
                        type: ActionTypes.INVOICELIST,
                        payload: data
                    })
                    dispatch({
                        type:ActionTypes.INVOICECOMPLETE,
                        payload:[]
                    })
                    
                }
        } catch (error) {
            
        }

    }
}


const load = async(resp:any)  =>{
    await resp.data.results.forEach(async(element:any) => {
                    
        element.client_name = await setClientById(element.client);
    });
    return resp.data;
}

export const stratAddNewInvoiceDetail = (invoiceD:InvoiceDetailBilling)=>{
    return  async (dispatch: Dispatch<InvoiceAction>) => {
            const isv:number = (invoiceD.total_line * 0.15)
            const payload:any = {
                isv: isv,
                subTotal: invoiceD.total_line,
                total: (isv + invoiceD.total_line),
                listInvoiceDetail: invoiceD
            }
            dispatch({
                type:ActionTypes.INVOICEADD,
                payload
            })
    }
}