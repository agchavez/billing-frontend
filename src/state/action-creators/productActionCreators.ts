import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';

import Swal from 'sweetalert2';
import http from '../../utils/axios';
import { ListProductResponse, ProductInterface } from '../../interfaces/response';
import { ClientAction } from '../actions/clientAction';

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