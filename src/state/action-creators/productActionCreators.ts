import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';

import Swal from 'sweetalert2';
import http from '../../utils/axios';
import { ListProductResponse, ProductInterface } from '../../interfaces/response';
import { ClientAction } from '../actions/clientAction';
import { ProductAction } from '../actions/productAction';

const tokenx = localStorage.getItem('token');

export const startLoadingProducts = ()=>{
    return  (dispatch: Dispatch<ClientAction>) => {
        try {
            http.get<ListProductResponse>('/products/', {headers: {'token': `${tokenx}`}}).then(resp => {
                if (resp.status === 200) {
                    
                    dispatch({
                        type: ActionTypes.PRODUCTLIST,
                        payload: resp.data
                    })
                    
                }
            })
        } catch (error) {
            
        }

    }
}

export const startNewProduct = (name:string, price:number, amount:number, code:string)=>{
    return  async(dispatch: Dispatch<ProductAction>) => {
         try {
            const product =  await  http.post<ListProductResponse>('/products/',{ name, price, amount, code},{headers: {'token': `${tokenx}`}} ) 

            if (product.status === 201) {
               Swal.fire({
                   position: 'top-end',
                   icon: 'success',
                   title: 'Producto agregado con exito',
                   showConfirmButton: false,
                   timer: 1500
                 })
   
                 dispatch({
                     type:ActionTypes.PRODUCTADD,
                     payload: product.data
                 })             
            }else{
               Swal.fire({
                   icon: 'error',
                   position: 'top-end',
                   title: 'Error al guadar ',
                   text: 'Revisa que los datos sean correctos'
                 })
            }
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