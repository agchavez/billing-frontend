import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';

import Swal from 'sweetalert2';
import http from '../../utils/axios';
import { ListClientResponse, ClientInterface } from '../../interfaces/response';
import { ClientAction } from '../actions/clientAction';

const tokenx = localStorage.getItem('token');

export const startLoadingClients = ()=>{
    return  (dispatch: Dispatch<ClientAction>) => {
        try {
            
            
            http.get<ListClientResponse>('/clients/', {headers: {'token': `${tokenx}`}}).then(resp => {
                if (resp.status === 200) {
                    dispatch({
                        type: ActionTypes.CLIENTLIST,
                        payload: resp.data.results
                    })
                    
                }
            })
        } catch (error) {
            
        }

    }
}