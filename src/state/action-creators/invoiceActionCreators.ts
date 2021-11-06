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
        try {
           
            const resp  = await http.get<ListInvoiceResponse>('/invoices/', {headers: {'token': `${tokenx}`}})
            const data = await load(resp)  
            
            
            dispatch({
                type: ActionTypes.INVOICELIST,
                payload: data
            })
                    
        } catch (error) {
            
        }

    }
}


const load = async(resp:any)  =>{
    await resp.data.results.forEach(async(element:any) => {
                    
        element.client_name = await setClientById(null);
        
    });
    return resp.data;
}

export const saveNewInvoiceDetail = (invoiceD:InvoiceDetailBilling[], id:number)=>{
    return  async (dispatch: Dispatch<InvoiceAction>) => {
        try {
                invoiceD.forEach(async(elemet) => {
                    const data:any = {
                        
                            total_line: elemet.total_line,
                            product: elemet.product,
                            invoice:id,
                            amount: elemet.amount
                        
                    }
                    const resp  = await http.post<InvoiceDetail>('/invoice-details/',data, {headers: {'token': `${tokenx}`}})
                    if (resp.status !== 201) {
                        Swal.fire({
                            icon: 'error',
                            position: 'top-end',
                            title: 'Error al guadar ',
                            text: 'Revisa que los datos sean correctos'
                          })
                        return
                    }
                })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Compra realizada con exito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
                  dispatch({
                        type: ActionTypes.INVOICECOMPLETE,
                        payload :[]
                  })


            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Error al guadar ',
                    text: 'Revisa que los datos sean correctos'
                  })
            }
    }
    
}

export const saveNewInvoice = async(data:any)=>{
    try {
        const resp  = await http.post<InvoiceInterface>('/invoices/',data, {headers: {'token': `${tokenx}`}})
        if (resp.status === 201) {
            
            
            return resp.data.id
        }else{
            return null
        }
    } catch (error) {
        return null
        
    }
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

export const startRemoveInvoiceDetail = (invoiceD:InvoiceDetailBilling)=>{
    return  async (dispatch: Dispatch<InvoiceAction>) => {
        const isv:number = (invoiceD.total_line * 0.15)
        const payload:any = {
            isv: isv,
            subTotal: invoiceD.total_line,
            total: (isv + invoiceD.total_line),
            listInvoiceDetail: invoiceD
        }
        dispatch({
            type:ActionTypes.INVOICEREMOVE,
            payload
        })
}
}