import { Dispatch } from "redux";
import { ActionTypes } from '../types/types';
import { AuthAction } from '../actions/authAction';
import { authInterface } from '../reducers/authReducer';
import Swal from 'sweetalert2';

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
                //Guardar token en el local storage 
                localStorage.setItem('token', req.data.token)
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

export const startLogOut = ()=>{
    
    return async (dispatch: Dispatch<AuthAction>) => {
        localStorage.removeItem('token')
        dispatch({
            type: ActionTypes.AUTHLOGOUT,
            payload: {}
        })
    }
}

export const validateToken = (token:any)=>{
    let user:authInterface;
    return async (dispatch: Dispatch<AuthAction>) => {
        const req = await http.get('/seller/login/', {headers: {"token": token}}) 
        if (req.status === 200) {
            user = {
                id: req.data.id,
                name: `${req.data.first_name} ${req.data.last_name}`,
                checking: false
            }
            dispatch({
            type: ActionTypes.AUTHVALIDATE,
            payload: user
        })
            
        }
        
    }
} 