import { discountInterface } from '../reducers/discountReducer';
import { ActionTypes } from '../types/types';
import { DiscountAction } from '../actions/discountAction';
import { Dispatch } from 'redux';
import http from '../../utils/axios';
import { DiscountResponse } from '../../interfaces/response';
import Swal from 'sweetalert2';

export const startActiveDiscount = (code:number)=>{
    return  async(dispatch: Dispatch<DiscountAction>) => {
        try {
            
            const resp = await http.get<DiscountResponse>(`/discounts/${code}/`)
            
                   if(resp.status === 200){
                       const data:discountInterface = {
                           amount:resp.data.discount,
                           id:resp.data.id,
                           total: 0,
                           code: resp.data.code
                       }
                    dispatch({
                        type: ActionTypes.DISCOUNTACTIVE,
                        payload:data
                    })
                    Swal.fire({
                        icon: 'success',
                        title: `Copon de ${resp.data.discount}% aplicado`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                   }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos'
              })
        }
    }
}

export const startAddProduct = (total:number)=>{
    return  (dispatch: Dispatch<DiscountAction>) => {
            dispatch({
                type:ActionTypes.DISCOUNTUPDATE,
                payload:{
                    total
                }
            })
    }
}
export const startInactiveDiscount = ()=>{
    return  (dispatch: Dispatch<DiscountAction>) => {
            dispatch({
                type: ActionTypes.DISCOUNTINACTIVE,
                payload:{
                    total: 0
                }
            })
    }
}
