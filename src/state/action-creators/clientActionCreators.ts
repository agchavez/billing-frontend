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

export const getClientById = async(rtn:number)=>{
    try {
        const client = await http.get<ClientInterface>(`/clients/${rtn}/`, {headers: {'token': `${tokenx}`}});
        if(client.status ===200){
            return client.data
        }else{
            return null
        }
    } catch (error) {
        return null
    }
    
}

export const startActiveClient = (client:ClientInterface)=>{
    return  (dispatch: Dispatch<ClientAction>) => {
            dispatch({
                type: ActionTypes.CLIENTACTIVE,
                payload:client
            })
    }
}



export const setClientById = async(id:any)=>{
    const data:ClientInterface = {
        name: "",
        id:0,
        rtn: "",
        created: null,
    }
    
    try {
        if (id === null) {
            return data
        }

        const client = await http.get<ClientInterface>(`/clients/${id}/`, {headers: {'token': `${tokenx}`}})
        
        if(client.status ===200){
            return client.data
        }else{
            return data
        }
        
    } catch (error) {
        return data
        
    }
}

export const startNewClient =  (name:string, rtn:any)=>{
    return  async(dispatch: Dispatch<ClientAction>) => {
        try {
            const client = await http.post<ClientInterface>('/clients/', {name, rtn},{headers: {'token': `${tokenx}`}} ) 
            if (client.status === 201) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cliente agregado con exito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  dispatch({
                      type: ActionTypes.CLIENTADD,
                      payload: client.data
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