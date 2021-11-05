import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';

import Swal from 'sweetalert2';
import http from '../../utils/axios';
import { ListInvoiceResponse, InvoiceInterface } from '../../interfaces/response';
import { InvoiceAction } from '../actions/invoiceAction';
import { setClientById } from './clientActionCreators';

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