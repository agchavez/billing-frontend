import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';
import { AuthAction } from '../actions/authAction';
import { authInterface } from '../reducers/authReducer';
import Swal from 'sweetalert2';
import Axios from 'axios';

import http from '../../utils/axios';
import { LoginResponse } from '../../interfaces/response';

export const startLogin = (code:number)=>{
    let user:authInterface;
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            
             const req = await http.post<LoginResponse>('/seller/login/', {"code":code})  
             if(req.status === 201){
                user = {
                    id: req.data.user.id,
                    name: `${req.data.user.first_name} ${req.data.user.last_name}`,
                    checking: false
                }
                  dispatch({
                    type: ActionTypes.AUTHLOGIN,
                    payload: user
                })
             }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Datos incorrectos'
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